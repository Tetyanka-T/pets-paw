import { useState, useEffect } from 'react';
import { ReactComponent as Favorite } from '../../image/fav-20.svg';
import * as apiService from '../../apiService/apiService';
import s from './FavoritePage.module.scss';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import Container from 'components/Container/Container';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';

const FavoritePage = () => {
  const [favorite, SetFavorite] = useState('');
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    async function onFetchFavorite() {
      try {
        setReqStatus('pending');
        const fav = await apiService.getAllFavourites();

        if (!fav) {
          throw new Error();
        }
        SetFavorite(fav);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
      }
    }
    onFetchFavorite();
  }, []);

  return (
    <PageContainer>
      <Menu />
      <Container>
        <ComeBackButton />
        <h2>Your Favorites Photo</h2>
        {reqStatus === 'pending' && <Loader />}
        {favorite && (
          <ul className={s.favList}>
            {favorite.map(fav => (
              <li key={fav.id} className={s.favList_item}>
                <img
                  src={fav.image.url}
                  alt={fav.alt}
                  width="640px"
                  height="360px"
                />
                <div>
                  <p className={s.favList_time}>
                    {fav.created_at.slice(11, -8)}
                  </p>
                  <p className={s.favList_voice_disc}>
                    Image ID: <span>{fav.image_id}</span> was added to Favorite
                  </p>
                  <Favorite />
                </div>
                <p className={s.favList_time}>{fav.created_at.slice(11, -8)}</p>
                <p className={s.favList_voice_disc}>
                  Image ID: <span>{fav.image_id}</span> was added to Favorite
                </p>
                <Favorite />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </PageContainer>
  );
};

export default FavoritePage;
