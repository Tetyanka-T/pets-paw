import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuButton } from '../../image/menu.svg';
import { ReactComponent as CloseMenu } from '../../image/cansel.svg';
import { ReactComponent as LogoName } from '../../image/logo-name.svg';
import SideBar from 'components/SideBar/SideBar';
import s from './NavBar.module.scss';

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
      <Link to="/">
        <LogoName className={s.logo} />
      </Link>
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
