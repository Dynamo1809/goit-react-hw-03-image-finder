import { Component } from 'react';
import PropTypes from 'prop-types'

import Loader from "react-loader-spinner";
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import PixabayAPI from 'services/pixabay-api';

// const styles = {
//   marginLeft: 'auto',
//   marginRight: 'auto', 
// }

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
        this.resetPage();

        PixabayAPI
        .fetchPhotos(searchQuery)
        .then(res => {          
          this.setState({ images: res.hits, status: Status.RESOLVED, isLoader: false})
        })
        .catch(error => this.setState({ error: error.message, status: Status.REJECTED }))

        return;
      }
        console.log('Hello')
      if(prevState.page !== page && page !== 1)  {
        PixabayAPI
        .fetchPhotos(searchQuery, page)
        .then(res => {
        this.setState(({images}) =>({ images: [...images, ...res.hits], status: Status.RESOLVED, isLoader: false }))
        
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

        })        
        .catch(error => this.setState({ error: error.message, status: Status.REJECTED }))
      }

      // this.setState({isLoader: false})
    };

  };

  handleLoadMoreClick = (e) => {
    this.setState(({ page }) => ({ page: page + 1 }))
  };

  resetPage = () => {
    this.setState({ page: 1, status: Status.IDLE })
  }

  render() {
    const { images, status, error, isLoader } = this.state;
    const { searchQuery } = this.props
    console.log("🚀 ~ GALLERY IMAGES", images)
    console.log(this.state)
    
    if(status === 'idle') {return null};

    if(status === 'rejected') {return <h1 style={{textAlign: 'center'}}>{error}</h1>};
    
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

          { isLoader && <Loader className="Loader" type="ThreeDots" color="#3f51b5" />}
          
          { images.length % 12 === 0 && <Button onClick={this.handleLoadMoreClick} /> }            
        
        </>
          ): (            
            <h2 style={{textAlign: 'center'}}>Sorry, nothing was found for query '{searchQuery}'</h2>
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