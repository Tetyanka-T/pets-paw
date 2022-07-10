import { useState, useEffect } from 'react';

import { ReactComponent as PagePrev } from '../../image/prev-grey.svg';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';

import s from './Breeds.module.scss';
import CatList from 'components/CatList/CatList';
import BreedsForm from 'components/BreedsFilter/BreedsFilter';
// import CatCard from 'components/CatCard/CatCard';

const Breeds = () => {
  const [cats, setCats] = useState([]);

  return (
    <div className={s.breeds_wrapper}>
      <BreedsForm />
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
