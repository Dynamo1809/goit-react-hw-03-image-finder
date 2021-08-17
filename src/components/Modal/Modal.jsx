import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')


export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDownClick)
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDownClick);
  };

  handleKeyDownClick = e => {
    if(e.code === 'Escape') {
      this.props.onClose('');
    }
  };

  handleBackdropClick = e => {
    if(e.currentTarget === e.target) {
      this.props.onClose('');
    }
  }

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={ this.props.src } alt="" />
        </div>
      </div>,
      modalRoot)
  };
    
};

