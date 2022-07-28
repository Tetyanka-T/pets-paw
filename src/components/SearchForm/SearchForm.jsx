import { Link } from 'react-router-dom';
import { ReactComponent as Search } from '../../image/search.svg';
import s from './SearchForm.module.scss';

const SearchForm = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.searchImage.value);
  };

  return (
    <form onSubmit={handleSearch} className={s.searchForm}>
      <input
        className={s.searchForm_input}
        type="text"
        name="searchImage"
        autoComplete="off"
        autoFocus
        placeholder="Search for breeds by name"
      />
      <Link to="/search">
        <button type="submit" className={s.button}>
          <Search />
        </button>
      </Link>
    </form>
  );
};

export default SearchForm;
