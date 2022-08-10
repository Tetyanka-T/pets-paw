import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';
import s from './CatCard.module.scss';

const CatCard = ({ cat }) => {
  const [photo, SetPhoto] = useState('');
  const [reqStatus, SetReqStatus] = useState('idle');

  useEffect(() => {
    async function getPhoto() {
      const catId = cat.id;
      if (cat) {
        try {
          SetReqStatus('pending');
          const photo = await apiService.fetchCat(catId);

          if (!photo) {
            throw new Error();
          }
          SetPhoto(photo);
          SetReqStatus('resolved');
        } catch (err) {
          SetReqStatus('rejected');
        }
      }
    }
    getPhoto();
  }, [cat]);

  return (
    <div className={s.catCard_container}>
      <div className={s.catCard_Button}>
        <ComeBackButton />
        <p className={s.catCard_Button_title}>BREEDS</p>
        <p className={s.catCard_Button_catId}>{cat.id}</p>
      </div>
      {reqStatus === 'pending' && <Loader />}
      {photo && (
        <div className={s.card_thumb}>
          <img className={s.card_photo} src={photo.url} alt=""></img>
        </div>
      )}
      <div className={s.wrapper_desc}>
        <h2 className={s.cat_breed}>{cat.name}</h2>
        <p className={s.cat_family}>{cat.description}</p>
        <div className={s.cat_desc}>
          <p className={s.cat_temp}>
            Temperament:
            <span className={s.cat_span}>{cat.temperament}</span>
          </p>
          <ul className={s.cat_desc_list}>
            <li className={s.cat_desc_listItem}>
              Origin: <span className={s.cat_span}>{cat.origin}</span>
            </li>
            <li className={s.cat_desc_listItem}>
              Weight:
              <span className={s.cat_span}> 3 - 7 kgs</span>
            </li>
            <li className={s.cat_desc_listItem}>
              Life span: <span className={s.cat_span}>{cat.life_span}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
