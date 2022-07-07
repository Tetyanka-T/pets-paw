import CatList from 'components/CatList/CatList';
import FormGallery from 'components/FormGallery/FormGallery';
import Menu from 'components/Menu/Menu';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.homePage_container}>
      <Menu className={s.homePage_menu} />
      {/* <div className={s.homePage_photoContainer}></div> */}
      <div>
        <FormGallery />
        <CatList />
      </div>
    </div>
  );
};

export default HomePage;
