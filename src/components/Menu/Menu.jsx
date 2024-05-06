import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as LogoName } from '../../image/logo-name.svg';
import { ReactComponent as Voting } from '../../image/voting.svg';
import { ReactComponent as Breeds } from '../../image/breeds.svg';
import { ReactComponent as Gallery } from '../../image/img.svg';
import s from './Menu.module.scss';

const Menu = onClick => {
  return (
    <div className={s.menuContainer}>
      <Link to="/">
        <LogoName className={s.logo} />
      </Link>

      <h1 className={s.title}>Нello cat lovers!</h1>
      <p className={s.welcome}>Welcome to the cute application</p>
      <p className={s.start}>Lets start using The Cat API</p>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <Voting className={s.menuIcon} />
          <NavLink
            to="/voting"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            VOTING
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <Breeds className={s.menuIcon} />
          <NavLink
            to="/breeds"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            BREEDS
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <Gallery className={s.menuIcon} />
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            GALLERY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
