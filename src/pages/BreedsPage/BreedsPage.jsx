import PageContainer from 'components/PageContainer/PageContainer';
import Container from 'components/Container/Container';
import Breeds from 'components/Breeds/Breeds';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import s from './BreedsPage.module.scss';

const BreedsPge = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm />
          <LinksPanel />
        </div>
        <Breeds />
      </Container>
    </PageContainer>
  );
};

export default BreedsPge;
