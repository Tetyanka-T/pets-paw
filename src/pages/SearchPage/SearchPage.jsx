import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import CatCard from 'components/CatCard/CatCard';
import NavBar from 'components/NavBar/NavBar';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import s from '../BreedsPage/BreedsPage.module.scss';

const SearchPage = () => {
  const [searchCat, SetSearchCat] = useState(null);
  const [cats, SetCats] = useState([]);

  useEffect(() => {
    apiService.fetchSearchCats(searchCat).then(SetCats);
  }, [searchCat]);

  const reset = () => {
    SetSearchCat(null);
    SetCats([]);
  };

  const handleSearchCat = searchCat => {
    reset();
    SetSearchCat(searchCat);
  };
  return (
    <div className="container">
      <NavBar />
      <div className={s.tabletwidth}>
        <div className={s.menu}>
          <Menu />
        </div>

        <div className={s.votingPage}>
          <div className={s.search}>
            <SearchForm onSearch={handleSearchCat} />
            <LinksPanel />
          </div>
          {searchCat && <CatCard cat={cats} />}
          {!searchCat && (
            <h2 className={s.titleSerach}>Search cats for breeds by name</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
