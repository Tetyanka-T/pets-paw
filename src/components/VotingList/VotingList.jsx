import { ReactComponent as Like } from '../../image/like-20.svg';
import { ReactComponent as Dislike } from '../../image/dislike-20.svg';
import { ReactComponent as Favorite } from '../../image/fav-20.svg';
import { ReactComponent as Delete } from '../../image/cansel.svg';
import s from './VotingList.module.scss';

const VotingList = ({ voices, favorite, deleteVote, deleteFavourite }) => {
  return (
    <>
      {voices && (
        <ul className={s.votingList}>
          {voices.map(voice => (
            <li key={voice.id} className={s.votingList_item}>
              <span className={s.votingList_time}>
                {/* {voice.created_at.slice(11, -8)} */}
              </span>
              {voice.value === 1 && (
                <>
                  <p className={s.votingList_voice_disc}>
                    Image ID: <span>{voice.image_id}</span> was added to Like
                  </p>
                  <div className={s.button_container}>
                    <Like width="20px" height="20px" />
                    <Delete
                      className={s.button_delete}
                      onClick={() => deleteVote(voice.id)}
                    />
                  </div>
                </>
              )}
              {voice.value === 0 && (
                <>
                  <p className={s.votingList_voice_disc}>
                    Image ID: <span>{voice.image_id}</span> was added to Dislike
                  </p>
                  <div className={s.button_container}>
                    <Dislike width="20px" height="20px" />
                    <Delete
                      className={s.button_delete}
                      onClick={() => deleteVote(voice.id)}
                    />
                  </div>
                </>
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
                {/* {fav.created_at.slice(11, -8)} */}
              </p>
              <p className={s.votingList_voice_disc}>
                Image ID: <span>{fav.image_id}</span> was added to Favorite
              </p>
              <div className={s.button_container}>
                <Favorite width="20px" height="20px" />
                <Delete
                  className={s.button_delete}
                  onClick={() => deleteFavourite(fav.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default VotingList;
