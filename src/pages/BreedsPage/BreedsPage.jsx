import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Breeds from 'components/Breeds/Breeds';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import CatCard from 'components/CatCard/CatCard';
import NavBar from 'components/NavBar/NavBar';
import s from './BreedsPage.module.scss';

const BreedsPge = () => {
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
          {!searchCat && <Breeds />}
          {searchCat && <CatCard cat={cats} />}
        </div>
      </div>
    </div>
  );
};

export default BreedsPge;
