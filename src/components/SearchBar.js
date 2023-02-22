import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ searchImage }) => {
  const [image, setImage] = useState('');

  const handleChangeSearch = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image.trim() === '') {
      // трим слева и справа убирает пробелы у строки
      toast.warn('Please, enter image name', {
        position: 'top-right',
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
    searchImage(image);
    setImage('');
  };

  return (
    <div className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <FiSearch size="25" />
        </button>
        <input
          type="text"
          autoFocus
          value={image}
          onChange={handleChangeSearch}
          placeholder="Search images"
          className="SearchForm-input"
        />
      </form>
    </div>
  );
};
