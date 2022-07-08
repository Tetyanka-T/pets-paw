import { ReactComponent as Like } from '../../image/like.svg';
import { ReactComponent as Favorite } from '../../image/hart-white.svg';
import { ReactComponent as DisLike } from '../../image/dislike.svg';

import s from './LinksPanel.module.scss';

const LinksPanel = () => {
  return (
    <ul className={s.linksList}>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <Like />
        </button>
      </li>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <Favorite />
        </button>
      </li>
      <li className={s.linksList_item}>
        <button className={s.linksList_button} type="button">
          <DisLike />
        </button>
      </li>
    </ul>
  );
};

export default LinksPanel;
