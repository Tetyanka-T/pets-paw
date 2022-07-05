import { useEffect, useState } from 'react';
import * as apiService from '../../apiService/apiService';
import s from './CatList.module.scss';

const CatList = () => {
  const [breeds, setBreeds] = useState(null);

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
              <p className={s.imageList_itemTitle}>breed</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CatList;
