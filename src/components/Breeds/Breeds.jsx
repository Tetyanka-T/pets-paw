import { useState, useEffect } from 'react';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as SortButtonUp } from '../../image/sort-up.svg';
import { ReactComponent as SortButtonDown } from '../../image/sort-down.svg';

import { ReactComponent as PagePrev } from '../../image/prev-grey.svg';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';
import * as apiService from '../../apiService/apiService';
import s from './Breeds.module.scss';
import CatList from 'components/CatList/CatList';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    apiService.fetchAllBreeds().then(setBreeds);
  }, []);

  return (
    <div className={s.breeds_wrapper}>
      <div className={s.breeds_button}>
        <ComeBackButton />
        <p className={s.breeds_title}>BREEDS</p>
        <select name="breeds" id="breeds" className={s.select_breeds}>
          <option value="All breeds">All breeds</option>
          {breeds.map(breed => (
            <option key={breeds.id} value={breed.name}>
              {breed.name}
            </option>
          ))}
        </select>
        <select name="limit" id="limit" className={s.select_limit}>
          <option value="5">Limit: 5</option>
          <option value="10">Limit: 10</option>
          <option value="15">Limit: 15</option>
          <option value="20">Limit: 20</option>
        </select>
        <button type="button" className={s.button_sort}>
          <SortButtonUp />
        </button>
        <button type="button" className={s.button_sort}>
          <SortButtonDown />
        </button>
      </div>
      <CatList />
      <div className={s.button_page}>
        <button className={s.button_prev}>
          <PagePrev />
          <span>PREV</span>
        </button>
        <button className={s.button_next}>
          <span>NEXT</span>
          <PageNext />
        </button>
      </div>
    </div>
  );
};

export default Breeds;
