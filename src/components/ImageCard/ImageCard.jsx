import s from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div className={s.card}>
      <img
        src={image.urls.small}
        alt={image.alt_descriotion}
        className={s.image}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
