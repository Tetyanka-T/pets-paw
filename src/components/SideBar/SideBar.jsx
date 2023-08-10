import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as LogoName } from '../../image/logo-name.svg';

import s from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={s.menuContainer}>
      <Link to="/">
        <LogoName className={s.logo} />
      </Link>
      <h1 className={s.title}>Нello cat lovers!</h1>
      <p className={s.welcome}>Welcome to the cute application</p>
      <p className={s.start}>Lets start using The Cat API</p>

      <ul>
        <li className={s.menuItem}>
          <NavLink
            to="/voting"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            VOTING
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink
            to="/breeds"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            BREEDS
          </NavLink>
        </li>
        <li className={s.menuItem}>
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
export default SideBar;
