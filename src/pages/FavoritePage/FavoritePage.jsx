import { useState, useEffect } from 'react';
import { ReactComponent as Favorite } from '../../image/fav-20.svg';
import { ReactComponent as Delete } from '../../image/cansel.svg';
import * as apiService from '../../apiService/apiService';
import s from './FavoritePage.module.scss';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';
import NavBar from 'components/NavBar/NavBar';

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

  const deleteFavourite = async favId => {
    await apiService.deleteFavouriteCat(favId);
    SetFavorite(favorite => favorite.filter(fav => fav.id !== favId));
  };

  return (
    <PageContainer>
      <Menu />
      <div className="container">
        <NavBar />
        <ComeBackButton />
        <h2>Your Favorites Photo</h2>
        {reqStatus === 'pending' && <Loader />}
        {favorite.length === 0 && (
          <h3 className={s.no_voting}>
            You don't have any favorite photos yet
          </h3>
        )}
        {favorite && (
          <ul className={s.favList}>
            {favorite.map(fav => (
              <li key={fav.id}>
                <img src={fav.image.url} alt={fav.alt} />
                <div className={s.favList_item}>
                  <p className={s.favList_time}>
                    {fav.created_at.slice(11, -8)}
                  </p>
                  <p className={s.favList_voice_disc}>
                    Image ID: <span>{fav.image_id}</span> was added to Favorite
                  </p>
                  <div className={s.button_container}>
                    <Favorite width="20px" height="20px" />
                    <Delete
                      className={s.button_delete}
                      onClick={() => deleteFavourite(fav.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageContainer>
  );
};

export default FavoritePage;
