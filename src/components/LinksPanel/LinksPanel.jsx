import { ReactComponent as LikeTransp } from '../../image/like-transp.svg';
import { ReactComponent as FavoriteTransp } from '../../image/hart-transp.svg';
import { ReactComponent as DisLikeTransp } from '../../image/dislike-transp.svg';
import { ReactComponent as Like } from '../../image/like-red-big.svg';
import { ReactComponent as Favorite } from '../../image/hart-white-big.svg';
import { ReactComponent as DisLike } from '../../image/dislike-red-big.svg';

import s from './LinksPanel.module.scss';

const LinksPanel = () => {
  return (
    <ul className={s.linksList}>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <Like className={s.linksList_icon} />
          <LikeTransp className={s.linksList_iconHover} />
        </button>
      </li>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <Favorite className={s.linksList_icon} />
          <FavoriteTransp className={s.linksList_iconHover} />
        </button>
      </li>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <DisLike className={s.linksList_icon} />
          <DisLikeTransp className={s.linksList_iconHover} />
        </button>
      </li>
    </ul>
  );
};

export default LinksPanel;
