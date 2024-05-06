import { Link } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';
import SearchForm from 'components/SearchForm/SearchForm';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import Menu from 'components/Menu/Menu';
import NavBar from 'components/NavBar/NavBar';
import s from '../BreedsPage/BreedsPage.module.scss';

const GalleryPage = () => {
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
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
