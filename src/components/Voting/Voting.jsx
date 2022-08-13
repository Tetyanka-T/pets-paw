import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import PanelVoting from 'components/PanelVoting/PanelVoting';
import VotingList from 'components/VotingList/VotingList';
import Loader from 'components/Loader/Loader';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';
import s from './Voting.module.scss';

const Voting = () => {
  const [voices, SetVoices] = useState([]);
  const [cat, SetCat] = useState('');
  const [favorite, SetFavorite] = useState([]);
  const sub_id = 'User-123';
  const [page, SetPage] = useState(0);
  const [reqStatus, SetReqStatus] = useState('idle');

  useEffect(() => {
    async function onFetchCat() {
      try {
        SetReqStatus('pending');
        const cat = await apiService.getRandomCat(page);

        if (!cat) {
          throw new Error();
        }
        SetCat(cat);
        SetReqStatus('resolved');
      } catch (err) {
        SetReqStatus('rejected');
      }
    }
    onFetchCat();
  }, [page]);

  useEffect(() => {
    async function onFetchVoice() {
      try {
        SetReqStatus('pending');
        const voice = await apiService.getVoices();

        if (!voice) {
          throw new Error();
        }
        SetVoices(voice);
        SetReqStatus('resolved');
      } catch (err) {
        SetReqStatus('rejected');
      }
    }
    onFetchVoice();
  }, []);

  useEffect(() => {
    apiService.getAllFavourites().then(SetFavorite);
  }, []);

  const addLike = data => {
    data = {
      image_id: cat.id,
      sub_id: sub_id,
      value: 1,
    };
    apiService.postVoices(data).then(res => {
      SetVoices(prevState => [...prevState, data]);
    });
    apiService.getVoices().then(SetVoices);
    onLoadMore();
  };

  const addDislike = data => {
    data = {
      image_id: cat.id,
      sub_id: sub_id,
      value: 0,
    };
    apiService.postVoices(data).then(res => {
      SetVoices(prevState => [...prevState, data]);
    });

    onLoadMore();
  };
  const deleteVote = async voteId => {
    await apiService.deleteVoice(voteId);
    SetVoices(voices => voices.filter(voice => voice.id !== voteId));
  };

  const addFavorite = data => {
    data = {
      image_id: cat.id,
      sub_id: sub_id,
    };
    apiService.addFavouriteCat(data).then(res => {
      SetFavorite(prevState => [...prevState, data]);
    });
    onLoadMore();
  };
  const deleteFavourite = async favId => {
    await apiService.deleteFavouriteCat(favId);
    SetFavorite(favorite => favorite.filter(fav => fav.id !== favId));
  };
  const onLoadMore = () => {
    SetPage(prevState => prevState + 1);
  };

  return (
    <div className={s.voting_wrapper}>
      <div className={s.voting_buttonContainer}>
        <ComeBackButton />
        <p className={s.voting_title}>VOTING</p>
      </div>
      {reqStatus === 'pending' && <Loader />}
      {cat && (
        <div className={s.card_thumb}>
          <img src={cat.url} alt={cat.alt}></img>
          <PanelVoting
            addDislike={addDislike}
            addLike={addLike}
            addFavorite={addFavorite}
          />
        </div>
      )}
      <button className={s.button_next} onClick={onLoadMore}>
        <span>NEXT</span>
        <PageNext />
      </button>
      {reqStatus === 'pending' && <Loader />}
      {voices && favorite && (
        <VotingList
          voices={voices}
          favorite={favorite}
          deleteVote={deleteVote}
          deleteFavourite={deleteFavourite}
        />
      )}
    </div>
  );
};

export default Voting;
