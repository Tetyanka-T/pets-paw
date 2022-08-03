import { useState, useEffect } from 'react';
import { ReactComponent as Dislike } from '../../image/dislike-20.svg';
import * as apiService from '../../apiService/apiService';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import Container from 'components/Container/Container';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';
import s from '../../components/VotingList/VotingList.module.scss';

const DislikePage = () => {
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

  return (
    <PageContainer>
      <Menu />
      <Container>
        <ComeBackButton />
        <h2>Your Disliked Photo</h2>
        {reqStatus === 'pending' && <Loader />}
        {voices && (
          <ul className={s.votingList}>
            {voices.map(voice => (
              <div>
                {voice.value === 0 && (
                  <li key={voice.id} className={s.votingList_item}>
                    <p className={s.votingList_time}>
                      {voice.created_at.slice(11, -8)}
                    </p>
                    <p className={s.votingList_voice_disc}>
                      Image ID: <span>{voice.image_id}</span> was added to
                      Dislike
                    </p>
                    <Dislike width="20px" height="20px" />
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

export default DislikePage;
