// import Menu from 'components/Menu/Menu';
import { ReactComponent as MenuButton } from '../../image/menu.svg';
// import { ReactComponent as CloseMenu } from '../../image/cansel.svg';
import PageContainer from 'components/PageContainer/PageContainer';

import s from './HomePage.module.scss';
import SideBar from 'components/SideBar/SideBar';
import { useState } from 'react';

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  // const toggleMenu = () => {
  //   showMenu ? setShowMenu(false) : setShowMenu(true);
  // };
  // const onShowMenu = () => {
  //   setShowMenu(true);
  //   console.log(showMenu);
  //   // toggleMenu();
  // };

  return (
    <PageContainer>
      {/* <Menu className={s.homePage_menu} /> */}
      <MenuButton className={s.menuButton} onClick={() => setShowMenu(true)} />
      {/* <CloseMenu onClick={() => setShowMenu(false)} /> */}

      {showMenu && <SideBar />}

      <div className={s.backgroung}>
        <div className={s.homePage_photoContainer}></div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
