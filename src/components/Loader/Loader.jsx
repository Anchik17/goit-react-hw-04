import { ColorRing } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader({ onClick, isLoading }) {
  <div className={s.container}>
    {isLoading ? (
      <div className={s.loaderContainer}>
        <ColorRing
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          height={80}
          width={80}
        />
      </div>
    ) : (
      <button type='button' className={s.loaderBtn} onClick={onClick}>
        Load more
      </button>
    )}
  </div>;
}

export default Loader;
