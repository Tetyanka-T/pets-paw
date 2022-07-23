import { ReactComponent as Like } from '../../image/like.svg';
import { ReactComponent as Favorite } from '../../image/hart-white.svg';
import { ReactComponent as DisLike } from '../../image/dislike.svg';

import s from './LinksPanel.module.scss';
import { Link } from 'react-router-dom';

const LinksPanel = () => {
  return (
    <ul className={s.linksList}>
      <li className={s.linksList_item}>
        <Link to="/like" className={s.linksList_button} type="button">
          <Like />
        </Link>
      </li>
      <li className={s.linksList_item}>
        <Link to="/favorite" className={s.linksList_button} type="button">
          <Favorite />
        </Link>
      </li>
      <li className={s.linksList_item}>
        <Link to="/dislike" className={s.linksList_button} type="button">
          <DisLike />
        </Link>
      </li>
    </ul>
  );
};

export default LinksPanel;
