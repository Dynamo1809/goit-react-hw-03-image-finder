import { Component } from 'react';
import PropTypes from 'prop-types'

// import { toast } from 'react-toastify';
import Loader from "react-loader-spinner";
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
// import { Modal } from 'components/Modal';
import PixabayAPI from 'services/pixabay-api';

const styles = {
  marginLeft: 'auto',
  marginRight: 'auto', 
}

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

export class ImageGallery extends Component  {
  state = {
    images: [],
    error: null,
    isLoader: false,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate( prevProps, prevState ) {
    const { searchQuery } = this.props;
    const { page } = this.state;
    
    if( prevProps.searchQuery !== searchQuery || prevState.page !== page) {
      // this.setState({ status: Status.PENDING })
      this.setState({isLoader: true})

      if(prevProps.searchQuery !== searchQuery) {
        PixabayAPI
        .fetchPhotos(searchQuery)
        .then(res => {          
          this.setState({ images: res.hits, status: Status.RESOLVED, isLoader: false })
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }))
        return;
      }

      if(prevState.page !== page)  {
        PixabayAPI
        .fetchPhotos(searchQuery, page)
        .then(res => {
        this.setState(({images}) =>({ images: [...images, ...res.hits], status: Status.RESOLVED, isLoader: false }))
        
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

        })        
        .catch(error => this.setState({ error, status: Status.REJECTED }))
      }
      
    };

  };

  handleLoadMoreClick = (e) => {
    this.setState(({page}) => ({page: page +1}))
  };

  reset = () => {
    this.setState({ images: [], page: 1,})
  }

  render() {
    const { images, status, error, isLoader } = this.state;
    // console.log("🚀 ~ GALLERY IMAGES", images)
    
    if(status === 'idle') {return null};

    if(status === 'rejected') {return <h1>{error.message}</h1>};
    
    if(status === 'resolved') {
      return images.length !== 0 ? (
        <>
          <ul className="ImageGallery">            
            {images.map( ({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem 
                onOpenModal={this.props.onOpenModal} 
                key={id} 
                webformatURL={webformatURL} 
                largeImageURL={largeImageURL}/>
            ))}         
          </ul>
          {isLoader && <Loader 
            style={styles}
            type="ThreeDots"
            color="#3f51b5"
            width="60"
            height="60" 
          />}
          
          {images.length % 12 === 0 && (
            <Button onClick={this.handleLoadMoreClick} />
          )}            
        
        </>
          ): (            
            <h2 style={{textAlign: 'center'}}>Sorry, nothing was found for your query...</h2>
          )         
    };
  };
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  isLoader: PropTypes.bool,
  page: PropTypes.number,
  status: PropTypes.string,
};

// if(status === 'pending') {
//   return (
//     <Loader 
//       style={{
//         marginLeft: 'auto',
//         marginRight: 'auto',
//       }}
//         color="#3f51b5" 
//     />
// )};