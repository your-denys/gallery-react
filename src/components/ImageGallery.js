import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ShowMore } from './ShowMore';
import { Loading } from './Loading';
import { Modal } from './Modal';


export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loader: false,
    error: null,
    showModal: false,
    currentModal: [],
  };


  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevProps.perPage !== this.props.perPage
    ) {
      this.setState({ loader: true });
      this.setState({ error: null });
      setTimeout(() => {
        const axiosRequest = () => {
          return axios
            .get(
              `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=33114929-89e56d31f77aa9efa728a5365&image_type=photo&orientation=horizontal&per_page=${this.props.perPage}`
            )
            .then(
              (response) => 
              this.setState({ images: response.data.hits }),
              this.setState({ loader: false }),
              
            )
            .then(() => 
              this.setState({ error:'Picture is not found:('})
            )

        };
        axiosRequest();
      }, 1000);
    }
  }

  handlelarge = (id) => {
    this.setState({
      currentModal: this.state.images.filter((item) => item.id === id ? item : ''),
      })
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    const largepng = this.state.currentModal.map((item) => item.largeImageURL);
    const { images, loader,error, showModal} = this.state;
    const { inputValue } = this.props;
   
    return (
      <>
        {!loader && !images.length && <h2 className='error'>{error}</h2>}
        <ul className="ImageGallery">
          <ImageGalleryItem picture={images} onClick={this.toggleModal} showIdModel={this.handlelarge} name={inputValue} />
        </ul>
        {loader && <Loading />}
        {!!images.length && 
          <ShowMore perPage={this.props.showMore} />
        }
        { showModal && <Modal onClose={this.toggleModal}><img src={largepng} alt={'img'}/></Modal>}

      </>
    );
  }
}
