import { SearchBar } from './components/SearchBar';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ImageGallery } from './components/ImageGallery';

const App = () => {
  const [image, setImage] = useState('');
  const [perPage, setPerPage] = useState(12);

  const handleSearch = (image) => {
    setImage(image);
    setPerPage(12);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  const handleShowMore = () => {
    setPerPage((p) => p + 12);
  };

  return (
    <div className="App">
      <SearchBar searchImage={handleSearch} />
      <ImageGallery
        perPage={perPage}
        showMore={handleShowMore}
        searchQuery={image}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
