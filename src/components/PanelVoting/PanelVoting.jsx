import { ReactComponent as LikeTransp } from '../../image/like-transp.svg';
import { ReactComponent as HartTransp } from '../../image/hart-transp.svg';
import { ReactComponent as DisLikeTransp } from '../../image/dislike-transp.svg';
import { ReactComponent as Like } from '../../image/like-green-big.svg';
import { ReactComponent as Hart } from '../../image/hart-white-big.svg';
import { ReactComponent as DisLike } from '../../image/dislike-yellow-big.svg';
import s from './PanelVoting.module.scss';

const PanelVoting = () => {
  return (
    <ul className={s.panelVoting_list}>
      <li className={s.panelVoting_item}>
        <button className={s.panelVoting_buttonLike} type="button">
          <LikeTransp className={s.icon} />
          <Like className={s.icon_hover} />
        </button>
      </li>
      <li className={s.panelVoting_item}>
        <button className={s.panelVoting_buttonHart} type="button">
          <HartTransp className={s.icon} />
          <Hart className={s.icon_hover} />
        </button>
      </li>
      <li className={s.panelVoting_item}>
        <button className={s.panelVoting_buttonDisLike} type="button">
          <DisLikeTransp className={s.icon} />
          <DisLike className={s.icon_hover} />
        </button>
      </li>
    </ul>
  );
};

export default PanelVoting;
