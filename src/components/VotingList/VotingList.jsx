import { ReactComponent as Like } from '../../image/like-20.svg';
import { ReactComponent as Dislike } from '../../image/dislike-20.svg';
import { ReactComponent as Favorite } from '../../image/fav-20.svg';
import s from './VotingList.module.scss';

const VotingList = ({ voices, favorite }) => {
  return (
    <>
      {voices && (
        <ul className={s.votingList}>
          {voices.map(voice => (
            <li key={voice.id} className={s.votingList_item}>
              <p className={s.votingList_time}>
                {voice.created_at.slice(11, -8)}
              </p>
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
              <p className={s.votingList_time}>
                {fav.created_at.slice(11, -8)}
              </p>
              <div className={s.votingList_voice}>
                <p className={s.votingList_voice_disc}>
                  Image ID: <span>{fav.image_id}</span> was added to Favorite
                </p>
                <Favorite />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default VotingList;
