import { ReactComponent as LogoName } from '../../image/logo-name.svg';
import { ReactComponent as Voting } from '../../image/voting.svg';
import { ReactComponent as Breeds } from '../../image/breeds.svg';
import { ReactComponent as Gallery } from '../../image/gallery.svg';

import s from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={s.main}>
      <div className={s.menuContainer}>
        <LogoName className={s.logo} />
        <h1 className={s.title}>Hi intern!</h1>
        <p className={s.welcome}>Welcome to MI 2022 Front-end test</p>
        <p className={s.start}>Lets start using The Cat API</p>
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <Voting className={s.menuIcon} />
            <button className={s.menuButton}>VOTING</button>
          </li>
          <li className={s.menuItem}>
            <Breeds className={s.menuIcon} />
            <button className={s.menuButton}>BREEDS</button>
          </li>
          <li className={s.menuItem}>
            <Gallery className={s.menuIcon} />
            <button className={s.menuButton}>GALLERY</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
