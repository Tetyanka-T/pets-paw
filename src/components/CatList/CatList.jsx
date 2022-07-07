import { useEffect, useState } from 'react';
import * as apiService from '../../apiService/apiService';
import { ReactComponent as Favorite } from '../../image/hart-white.svg';
import s from './CatList.module.scss';

const CatList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    apiService.fetchAllBreeds().then(setBreeds);
  }, []);

  return (
    <>
      {breeds && (
        <ul className={s.imageList}>
          {breeds.map(breed => (
            <li key={breed.id} className={s.imageList_item}>
              <img
                src={breed.url}
                alt={breed.alt}
                className={s.imageList_photo}
              />
              {/* <p className={s.imageList_itemTitle}>breed</p> */}
              <button className={s.imageList_itemButton} type="button">
                <Favorite />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CatList;
