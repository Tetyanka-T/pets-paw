import { ReactComponent as Search } from '../../image/search.svg';
import s from './SearchForm.module.scss';

const SearchForm = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.searchCatName.value);
  };

  return (
    <form onSubmit={handleSearch} className={s.searchForm}>
      <input
        className={s.searchForm_input}
        type="text"
        name="searchCatName"
        autoComplete="off"
        autoFocus
        placeholder="Search for breeds by name"
      />
      <button type="submit" className={s.button}>
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
