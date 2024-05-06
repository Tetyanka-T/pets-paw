import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className="container">
      <PageContainer>
        <Menu className={s.homePage_menu} />
        <div className={s.backgroung}>
          <div className={s.homePage_photoContainer}></div>
        </div>
      </PageContainer>
    </div>
  );
};

export default HomePage;
