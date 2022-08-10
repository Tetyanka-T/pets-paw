import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import PageContainer from 'components/PageContainer/PageContainer';
import Container from 'components/Container/Container';
import Breeds from 'components/Breeds/Breeds';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import CatCard from 'components/CatCard/CatCard';
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
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm onSearch={handleSearchCat} />
          <LinksPanel />
        </div>
        {!searchCat && <Breeds />}
        {searchCat && <CatCard cat={cats} />}
      </Container>
    </PageContainer>
  );
};

export default BreedsPge;
