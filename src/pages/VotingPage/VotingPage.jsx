import Menu from 'components/Menu/Menu';
import PageContainer from 'components/PageContainer/PageContainer';
import Search from 'components/Search/Search';
import Voting from 'components/Voting/Voting';
import Container from 'components/Container/Container';
import LikePage from 'pages/LikePage/LikePage';

const VotingPage = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <LikePage />
        {/* <Search />
        <Voting /> */}
      </Container>
    </PageContainer>
  );
};

export default VotingPage;
