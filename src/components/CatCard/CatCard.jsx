import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './CatCard.module.scss';

const CatCard = ({ cat }) => {
  const [photos, SetPhoto] = useState('');
  const [reqStatus, SetReqStatus] = useState('idle');

  useEffect(() => {
    async function getPhoto() {
      const catId = cat.id;
      if (cat) {
        try {
          SetReqStatus('pending');
          const photo = await apiService.fetchCatForBreedsInfo(catId);

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
      {photos && (
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className={s.card_thumb}
          style={{
            '--swiper-pagination-color': '#ff868e',
            '--swiper-navigation-color': '#ff868e',
          }}
        >
          {photos.map(photo => (
            <SwiperSlide key={photo.id}>
              <img src={photo.url} alt="" className={s.card_photo} />
            </SwiperSlide>
          ))}
        </Swiper>
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
              Weight: <span className={s.cat_span}> 3 - 7 kgs</span>
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
