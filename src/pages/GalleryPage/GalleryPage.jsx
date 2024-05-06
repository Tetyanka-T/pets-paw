import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Gallery from 'components/Gallery/Gallery';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Menu from 'components/Menu/Menu';
import CatCard from 'components/CatCard/CatCard';
import NavBar from 'components/NavBar/NavBar';
import s from '../BreedsPage/BreedsPage.module.scss';

const GalleryPage = () => {
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
          {!searchCat && <Gallery />}
          {searchCat && <CatCard cat={cats} />}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
