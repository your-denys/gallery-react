import { SearchBar } from "./components/SearchBar";
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";
import { ImageGallery } from "./components/ImageGallery";

class App extends (Component) {

  state = {
    image: '',
    perPage: 12,
  };

  

  handleSearch = (image) => {
    this.setState({ image });
    this.setState({perPage: 12});
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  handleShowMore = () => {
    this.setState({perPage: this.state.perPage + 12})
  }

  render() {

    return (
      <div className="App">
        <SearchBar searchImage={this.handleSearch}/>
        <ImageGallery perPage = {this.state.perPage} showMore = {this.handleShowMore} searchQuery ={this.state.image}/>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
