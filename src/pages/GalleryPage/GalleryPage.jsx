import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import Gallery from 'components/Gallery/Gallery';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Container from 'components/Container/Container';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import CatCard from 'components/CatCard/CatCard';
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
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm onSearch={handleSearchCat} />
          <LinksPanel />
        </div>
        {!searchCat && <Gallery />}
        {searchCat && <CatCard cat={cats} />}
      </Container>
    </PageContainer>
  );
};

export default GalleryPage;
