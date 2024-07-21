import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './services/api';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {images && <ImageGallery images={images} onImageCLick={openModal} />}
      {images && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
      <Toaster />
    </div>
  );
};
