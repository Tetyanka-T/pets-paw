import LinksPanel from 'components/LinksPanel/LinksPanel';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './Search.module.scss';

const Search = ({ onSearch }) => {
  return (
    <div className={s.search_container}>
      <SearchForm onSearch={onSearch} />
      <LinksPanel />
    </div>
  );
};

export default Search;
