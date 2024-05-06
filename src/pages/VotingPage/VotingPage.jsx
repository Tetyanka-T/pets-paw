import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Voting from 'components/Voting/Voting';
import NavBar from 'components/NavBar/NavBar';
import s from '../BreedsPage/BreedsPage.module.scss';
import { Link } from 'react-router-dom';

const VotingPage = () => {
  return (
    <div className="container">
      <NavBar />
      <div className={s.tabletwidth}>
        <div className={s.menu}>
          <Menu />
        </div>

        <div className={s.votingPage}>
          <div className={s.search}>
            <Link to="/search">
              <SearchForm />
            </Link>
            <LinksPanel />
          </div>
          <Voting />
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
