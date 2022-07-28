import { ReactComponent as LogoName } from '../../image/logo-name.svg';
import { ReactComponent as Voting } from '../../image/voting.svg';
import { ReactComponent as Breeds } from '../../image/breeds.svg';
import { ReactComponent as Gallery } from '../../image/gallery.svg';

import s from './Menu.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={s.menuContainer}>
      <Link to="/">
        <LogoName className={s.logo} />
      </Link>

      <h1 className={s.title}>Hi intern!</h1>
      <p className={s.welcome}>Welcome to MI 2022 Front-end test</p>
      <p className={s.start}>Lets start using The Cat API</p>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <Voting className={s.menuIcon} />
          <NavLink to="/voting" className={s.menuLink}>
            VOTING
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <Breeds className={s.menuIcon} />
          <NavLink to="/breeds" className={s.menuLink}>
            BREEDS
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <Gallery className={s.menuIcon} />
          <NavLink to="/gallery" className={s.menuLink}>
            GALLERY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
