import { ReactComponent as Like } from '../../image/like-20.svg';
import { ReactComponent as Dislike } from '../../image/dislike-20.svg';
import { ReactComponent as Favorite } from '../../image/fav-20.svg';
import s from './VotingList.module.scss';

const VotingList = ({ voices, favorite }) => {
  const getTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    let time = h + ':' + m;
    return time;
  };

  return (
    <>
      {voices && (
        <ul className={s.votingList}>
          {voices.map(voice => (
            <li key={voice.id} className={s.votingList_item}>
              <span className={s.votingList_time}>
                {getTime(voice.created_at)}
              </span>
              {voice.value === 1 && (
                <div className={s.votingList_voice}>
                  <p className={s.votingList_voice_disc}>
                    Image ID: <span>{voice.image_id}</span> was added to Like
                  </p>
                  <Like />
                </div>
              )}
              {voice.value === 0 && (
                <div className={s.votingList_voice}>
                  <p className={s.votingList_voice_disc}>
                    Image ID: <span>{voice.image_id}</span> was added to Dislike
                  </p>
                  <Dislike />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      {favorite && (
        <ul className={s.votingList}>
          {favorite.map(fav => (
            <li key={fav.id} className={s.votingList_item}>
              <p className={s.votingList_time}>{getTime(fav.created_at)}</p>
              <p className={s.votingList_voice_disc}>
                Image ID: <span>{fav.image_id}</span> was added to Favorite
              </p>
              <Favorite />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default VotingList;
