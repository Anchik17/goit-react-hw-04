import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={s.gallery}>
      {images.map((image) => (
        <div key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
