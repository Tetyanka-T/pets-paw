import { useState, useEffect } from 'react';
import Gallery from 'components/Gallery/Gallery';
import Search from 'components/Search/Search';
import * as apiService from '../../apiService/apiService';
import Container from 'components/Container/Container';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';

const GalleryPage = () => {
  const [searchCat, setSearchCat] = useState(null);
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    if (!searchCat) {
      return;
    }
    async function onFetchCat() {
      try {
        setReqStatus('pending');

        const cats = await apiService.fetchSearchCat(searchCat, page);

        if (!cats.length) {
          throw new Error();
        }

        setCats(prevState => [...prevState, ...cats]);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
        // toast.error('Not found');
      }
    }
    onFetchCat();

    page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }, [page, searchCat]);

  const handleSearchChange = searchCat => {
    reset();
    setSearchCat(searchCat);
  };

  const reset = () => {
    setSearchCat(null);
    setCats([]);
  };
  return (
    <PageContainer>
      <Menu />
      <Container>
        <Search onSearch={handleSearchChange} />
        <Gallery cats={cats} />
      </Container>
    </PageContainer>
  );
};

export default GalleryPage;
