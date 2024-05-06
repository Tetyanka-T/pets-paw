import { Link } from 'react-router-dom';
import Breeds from 'components/Breeds/Breeds';
import Menu from 'components/Menu/Menu';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';

import NavBar from 'components/NavBar/NavBar';
import s from './BreedsPage.module.scss';

const BreedsPge = () => {
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
          <Breeds />
        </div>
      </div>
    </div>
  );
};

export default BreedsPge;
