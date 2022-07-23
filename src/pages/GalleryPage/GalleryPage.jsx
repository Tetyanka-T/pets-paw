import Gallery from 'components/Gallery/Gallery';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Container from 'components/Container/Container';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import s from '../BreedsPage/BreedsPage.module.scss';

const GalleryPage = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm />
          <LinksPanel />
        </div>
        <Gallery />
      </Container>
    </PageContainer>
  );
};

export default GalleryPage;
