import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Voting from 'components/Voting/Voting';
import CatCard from 'components/CatCard/CatCard';
import s from '../BreedsPage/BreedsPage.module.scss';
import NavBar from 'components/NavBar/NavBar';

const VotingPage = () => {
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
          {!searchCat && <Voting />}
          {searchCat && <CatCard cat={cats} />}
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
