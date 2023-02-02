import { Component } from 'react';
import { toast } from 'react-toastify';
import {FiSearch} from 'react-icons/fi'



export class SearchBar extends Component {
    state = {
        image: '',
    };
    
    
    handleChangeSearch = (e) => {
    this.setState({ image: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.image.trim() === '') {
      // трим слева и справа убирает пробелы у строки
      toast.warn('Please, enter image name', {
        position: 'bottom-right',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    this.props.searchImage(this.state.image);
    this.setState({
      image: '',
    });
  };

  

  render() {
    return (
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type='submit' className='SearchForm-button'><FiSearch size='25' /></button>
          <input
            type="text"
            autoFocus
            value={this.state.image}
            onChange={this.handleChangeSearch}
            placeholder="Search images"
            className="SearchForm-input"
          />
        </form>
      </div>
    );
  }
}
