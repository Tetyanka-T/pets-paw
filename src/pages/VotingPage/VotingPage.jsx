import Menu from 'components/Menu/Menu';
import PageContainer from 'components/PageContainer/PageContainer';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Voting from 'components/Voting/Voting';
import Container from 'components/Container/Container';
import s from '../BreedsPage/BreedsPage.module.scss';

const VotingPage = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <div className={s.search}>
          <SearchForm />
          <LinksPanel />
        </div>
        <Voting />
      </Container>
    </PageContainer>
  );
};

export default VotingPage;
