import { Component } from 'react';
import PropTypes from 'prop-types';

// Components //
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Modal } from 'components/Modal';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    searchQuery: '',
    modalImageSrc: '',
  };

  handleSubmit = searchQuery => {
    if(this.state.searchQuery === searchQuery) {
      toast(`Search name '${searchQuery}' already used`)
      return;
    }
    this.setState({searchQuery})
  };

  toggleModal = (src) => this.setState({  modalImageSrc: src });

  render() {
    const { searchQuery, modalImageSrc } = this.state;
    return (
      <div className="App">
        
        {modalImageSrc && <Modal src={modalImageSrc} onClose={this.toggleModal}/>}
        <ToastContainer autoClose={1500}/>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery onOpenModal={this.toggleModal} searchQuery={searchQuery} />
      </div>
    );
  };
  
};

export default App;

App.propTypes = {
  searchQuery: PropTypes.string,
  modalImageSrc: PropTypes.string,
};