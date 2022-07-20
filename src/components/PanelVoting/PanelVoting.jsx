import { ReactComponent as Like } from '../../image/like.svg';

import { ReactComponent as DisLike } from '../../image/dislike.svg';
import { ReactComponent as Favorite } from '../../image/hart-white.svg';
import { ReactComponent as FavoriteSelected } from '../../image/favorite.svg';

import s from './PanelVoting.module.scss';

const PanelVoting = ({ addLike, addDislike, addFavorite }) => {
  return (
    <ul className={s.panelVoting_list}>
      <li className={s.panelVoting_item}>
        <button
          className={s.panelVoting_buttonLike}
          type="button"
          onClick={() => addLike()}
        >
          <Like />
        </button>
      </li>
      <li className={s.panelVoting_item}>
        <button className={s.panelVoting_buttonHart} type="button">
          <Favorite className={s.buttonHart} />
          <FavoriteSelected
            className={s.buttonHart_selec}
            onClick={() => addFavorite()}
          />
        </button>
      </li>
      <li className={s.panelVoting_item}>
        <button
          className={s.panelVoting_buttonDisLike}
          type="button"
          onClick={() => addDislike()}
        >
          <DisLike />
        </button>
      </li>
    </ul>
  );
};

export default PanelVoting;
