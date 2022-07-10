import CatCard from 'components/CatCard/CatCard';
import Menu from 'components/Menu/Menu';
// import BreedsPage from '../BreedsPage/BreedsPage';
// import GalleryPage from 'pages/GalleryPage/GalleryPage';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.homePage_container}>
      <Menu className={s.homePage_menu} />
      {/* <div className={s.homePage_photoContainer}></div> */}
      <div>
        {/* <GalleryPage /> */}
        {/* <BreedsPage /> */}
        <CatCard />
      </div>
    </div>
  );
};

export default HomePage;
