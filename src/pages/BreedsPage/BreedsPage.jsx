import PageContainer from 'components/PageContainer/PageContainer';
import Container from 'components/Container/Container';
import Breeds from 'components/Breeds/Breeds';
import Search from 'components/Search/Search';
import Menu from 'components/Menu/Menu';

const BreedsPge = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <Search />
        <Breeds />
      </Container>
    </PageContainer>
  );
};

export default BreedsPge;
