import { Component } from 'react';



export class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleClose);
    }
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleClose);
    }
  
    handleClose = (e) => {
      if (e.key === 'Escape') {
        this.props.onClose();
      }
   }
  
    handleBackdrop = event => {
      if (event.currentTarget === event.target) {
          this.props.onClose();
      }
   }
  
    render() {
      return (
        <div className='Overlay' onClick = {this.handleBackdrop}>
          <div className='Modal'>{this.props.children}</div>
        </div>

      );
    }
  }