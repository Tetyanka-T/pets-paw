import { useState } from 'react';
import Menu from 'components/Menu/Menu';
import { ReactComponent as MenuButton } from '../../image/menu.svg';
import { ReactComponent as CloseMenu } from '../../image/cansel.svg';
import s from './NavBar.module.scss';
import SideBar from 'components/SideBar/SideBar';

const NavBar = () => {
  const [showMenu, SetShowMenu] = useState(false);

  const onShowMenu = () => {
    SetShowMenu(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showMenu ? SetShowMenu(false) : SetShowMenu(true);
  };
  return (
    <div className={s.navBarContainer}>
      <button className={s.menuButton} onClick={() => onShowMenu()}>
        {!showMenu && <MenuButton />}
      </button>
      {showMenu && (
        <div className={s.sideBar}>
          <button className={s.menuButton} onClick={() => onShowMenu()}>
            <CloseMenu className={s.closeButton} />
          </button>
          <SideBar onClick={onShowMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
