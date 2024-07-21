import { useState } from 'react';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('Please enter a search query!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={s.searchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={handleChange}
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          className={s.input}
        />
        <button className={s.button} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
