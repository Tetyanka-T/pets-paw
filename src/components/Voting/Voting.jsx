import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import PanelVoting from 'components/PanelVoting/PanelVoting';
import VotingList from 'components/VotingList/VotingList';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';
import s from './Voting.module.scss';

const Voting = () => {
  const [voices, SetVoices] = useState('');
  const [cat, SetCat] = useState('');
  const [favorite, SetFavorite] = useState('');
  const sub_id = 'User-123';
  const [page, SetPage] = useState(0);

  useEffect(() => {
    apiService.getRandomCat(page).then(SetCat);
  }, [page]);

  useEffect(() => {
    apiService.getVoices().then(SetVoices);
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
      SetVoices(data);
    });
  };

  const onLoadMore = () => {
    SetPage(prevState => prevState + 1);
  };

  const addDislike = data => {
    data = {
      image_id: cat.id,
      sub_id: sub_id,
      value: 0,
    };
    apiService.postVoices(data).then(res => {
      SetVoices(data);
    });
  };

  const addFavorite = data => {
    data = {
      image_id: cat.id,
      sub_id: sub_id,
    };
    apiService.addFavouriteCat(data).then(SetFavorite);
  };

  return (
    <div className={s.voting_wrapper}>
      <div className={s.voting_buttonContainer}>
        <ComeBackButton />
        <p className={s.voting_title}>VOTING</p>
      </div>
      <div className={s.card_thumb}>
        <img src={cat.url} alt={cat.alt}></img>
        <PanelVoting
          addDislike={addDislike}
          addLike={addLike}
          addFavorite={addFavorite}
        />
      </div>
      <button className={s.button_next} onClick={onLoadMore}>
        <span>NEXT</span>
        <PageNext />
      </button>
      {voices && favorite && <VotingList voices={voices} favorite={favorite} />}
    </div>
  );
};

export default Voting;
