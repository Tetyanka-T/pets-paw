import { useState, useEffect } from 'react';
import PageContainer from 'components/PageContainer/PageContainer';
import * as apiService from '../../apiService/apiService';
import Menu from 'components/Menu/Menu';
import Container from 'components/Container/Container';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import CatList from 'components/CatList/CatList';
import Loader from 'components/Loader/Loader';
import s from '../BreedsPage/BreedsPage.module.scss';
import ComeBackButton from 'components/ComeBack/ComeBackButton';

const SearchPage = () => {
  const [searchCat, SetSearchCat] = useState(null);
  const [cats, SetCats] = useState([]);
  const [page, setPage] = useState(0);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    if (!searchCat) {
      return;
    }
    async function onFetchCats() {
      try {
        setReqStatus('pending');
        const cats = await apiService.fetchSearchCats(searchCat, page);

        if (!cats.length) {
          throw new Error();
        }

        SetCats(cats);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
      }
    }
    onFetchCats();
  }, [page, searchCat]);

  const reset = () => {
    SetSearchCat(null);
    SetCats([]);
    setPage(1);
    setReqStatus('idle');
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
        <div className={s.button}>
          <ComeBackButton />
        </div>
        {reqStatus === 'pending' && <Loader />}
        {cats && <CatList cats={cats} />}
        {!searchCat && <h2>Not found</h2>}
      </Container>
    </PageContainer>
  );
};

export default SearchPage;
