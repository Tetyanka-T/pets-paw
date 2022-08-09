import { useState, useEffect } from 'react';
import { ReactComponent as Like } from '../../image/like-20.svg';
import { ReactComponent as Delete } from '../../image/cansel.svg';
import * as apiService from '../../apiService/apiService';
import s from '../../components/VotingList/VotingList.module.scss';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import Container from 'components/Container/Container';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';

const LikePage = () => {
  const [voices, SetVoices] = useState();
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    async function onFetchVoices() {
      try {
        setReqStatus('pending');
        const voice = await apiService.getVoices();

        if (!voice) {
          throw new Error();
        }
        SetVoices(voice);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
      }
    }
    onFetchVoices();
  }, []);

  const deleteVote = async voteId => {
    await apiService.deleteVoice(voteId);
    SetVoices(voices => voices.filter(voice => voice.id !== voteId));
  };

  return (
    <PageContainer>
      <Menu />
      <Container>
        <ComeBackButton />
        <h2>Your Liked Photo</h2>
        {reqStatus === 'pending' && <Loader />}
        {voices && (
          <ul className={s.votingList}>
            {voices.map(voice => (
              <div>
                {voice.value === 1 && (
                  <li key={voice.id} className={s.votingList_item}>
                    <p className={s.votingList_time}>
                      {voice.created_at.slice(11, -8)}
                    </p>
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
                  </li>
                )}
              </div>
            ))}
          </ul>
        )}
      </Container>
    </PageContainer>
  );
};

export default LikePage;
