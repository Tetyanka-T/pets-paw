import Menu from 'components/Menu/Menu';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.homePage_container}>
      <Menu className={s.homePage_menu} />
      {/* <div className={s.homePage_photoContainer}></div> */}
      <div>
        <GalleryPage />
      </div>
    </div>
  );
};

export default HomePage;
