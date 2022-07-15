import { useState, useEffect } from 'react';

import * as apiService from '../../apiService/apiService';
import { ReactComponent as PagePrev } from '../../image/prev-grey.svg';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';

import s from './Breeds.module.scss';
import CatList from 'components/CatList/CatList';
import BreedsFilter from 'components/BreedsFilter/BreedsFilter';
// import CatCard from 'components/CatCard/CatCard';

const Breeds = () => {
  const [cats, setCats] = useState([]);
  // console.log(cats);
  const [breeds, setBreeds] = useState([]);

  // useEffect(() => {
  //   apiService.fetchAllCats().then(setCats);
  // }, []);

  // useEffect(() => {
  //   apiService.fetchAllBreeds().then(setBreeds);
  // }, []);

  // const selectChangeBreeds = e => {
  //   setBreeds(e.target.value);
  // };

  return (
    <div className={s.breeds_wrapper}>
      <BreedsFilter breeds={breeds} />
      <CatList cats={cats} />
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
