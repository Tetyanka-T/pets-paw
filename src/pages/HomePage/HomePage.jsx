import Menu from 'components/Menu/Menu';
import PageContainer from 'components/PageContainer/PageContainer';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <PageContainer>
      <Menu className={s.homePage_menu} />
      <div className={s.backgroung}>
        <div className={s.homePage_photoContainer}></div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
