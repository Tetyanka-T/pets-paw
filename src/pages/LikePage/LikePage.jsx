import { useState, useEffect } from 'react';
import { ReactComponent as Like } from '../../image/like-20.svg';
import * as apiService from '../../apiService/apiService';
import s from '../../components/VotingList/VotingList.module.scss';

const LikePage = () => {
  const [voices, SetVoices] = useState();

  useEffect(() => {
    apiService.getVoices().then(SetVoices);
  }, []);
  return (
    <>
      {voices && (
        <ul className={s.votingList}>
          {voices.map(voice => (
            <div>
              {voice.value === 1 && (
                <li key={voice.id} className={s.votingList_item}>
                  <p className={s.votingList_time}>
                    {voice.created_at.slice(11, -8)}
                  </p>
                  <div className={s.votingList_voice}>
                    <p className={s.votingList_voice_disc}>
                      Image ID: <span>{voice.image_id}</span> was added to Like
                    </p>
                    <Like />
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default LikePage;
