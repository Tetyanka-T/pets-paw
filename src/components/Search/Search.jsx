import LinksPanel from 'components/LinksPanel/LinksPanel';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './Search.module.scss';

const Search = () => {
  return (
    <div className={s.search_container}>
      <SearchForm />
      <LinksPanel />
    </div>
  );
};

export default Search;
