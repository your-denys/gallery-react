import { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ShowMore } from './ShowMore';
import { Loading } from './Loading';
import { Modal } from './Modal';

export const ImageGallery = ({
  searchQuery,
  perPage,
  showMore,
  inputValue,
}) => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState([]);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (searchQuery !== '') {
      setLoader(true);
      setError(null);
      setTimeout(() => {
        const axiosRequest = () => {
          return axios
            .get(
              `https://pixabay.com/api/?q=${searchQuery}&page=1&key=33114929-89e56d31f77aa9efa728a5365&image_type=photo&orientation=horizontal&per_page=${perPage}`
            )
            .then((response) => {
              setImages(response.data.hits);
              setTotalHits(response.data.totalHits);
              setLoader(false);
              setError('Picture is not found:(');
            });
        };
        axiosRequest();
      }, 1000);
    } else {
      setImages([]);
    }
  }, [perPage, searchQuery]);
  const handlelarge = (id) => {
    setCurrentModal(images.filter((item) => item.id === id));
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const largepng = currentModal.map(
    ({ largeImageURL }) => largeImageURL
  );

  return (
    <>
      {!loader && !images.length && (
        <h2 className="error">{error}</h2>
      )}
      <ul className="ImageGallery">
        <ImageGalleryItem
          picture={images}
          onClick={toggleModal}
          showIdModel={handlelarge}
          name={inputValue}
        />
      </ul>
      {loader && <Loading />}
      {!!images.length && totalHits > perPage && <ShowMore perPage={showMore} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largepng} alt={'img'} />
        </Modal>
      )}
    </>
  );
};
