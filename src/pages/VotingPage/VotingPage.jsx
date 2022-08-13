import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Menu from 'components/Menu/Menu';
import PageContainer from 'components/PageContainer/PageContainer';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Voting from 'components/Voting/Voting';
import Container from 'components/Container/Container';
import CatCard from 'components/CatCard/CatCard';
import s from '../BreedsPage/BreedsPage.module.scss';

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
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm onSearch={handleSearchCat} />
          <LinksPanel />
        </div>
        {!searchCat && <Voting />}
        {searchCat && <CatCard cat={cats} />}
      </Container>
    </PageContainer>
  );
};

export default VotingPage;
