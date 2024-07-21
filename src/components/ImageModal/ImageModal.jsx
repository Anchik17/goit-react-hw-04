import Modal from 'react-modal';
import s from './ImageModal.module.css';

const customStyles = {
  content: {
    padding: '0',
    background: 'unset',
    overflow: 'unset',
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ImageModal({ image, isOpen, onRequestClose }) {
  if (!image) {
    return null;
  }
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel='image Modal'
        overlayClassName={s.overlay}
        appElement={document.getElementById('root')}
      >
        <button onClick={onRequestClose} className={s.closeBtn}>
          Close
        </button>

        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={s.image}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
