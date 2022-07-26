import { useState, useEffect } from 'react';
import * as apiService from '../../apiService/apiService';
import { ReactComponent as PagePrev } from '../../image/prev-grey.svg';
import { ReactComponent as PageNext } from '../../image/next-grey.svg';
import Loader from 'components/Loader/Loader';
import s from './Breeds.module.scss';
import CatList from 'components/CatList/CatList';
import BreedsFilter from 'components/BreedsFilter/BreedsFilter';
// import CatCard from 'components/CatCard/CatCard';

const Breeds = () => {
  const [cats, SetCats] = useState([]);
  const [breeds, SetBreeds] = useState([]);
  const [reqStatus, setReqStatus] = useState('idle');
  const [page, SetPage] = useState(0);
  const [limit, SetLimit] = useState('');

  useEffect(() => {
    apiService.fetchAllBreeds().then(SetBreeds);
  }, []);

  useEffect(() => {
    async function onFetchCats() {
      try {
        setReqStatus('pending');
        const cats = await apiService.fetchAllCats(page);

        if (!cats) {
          throw new Error();
        }
        SetCats(cats);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
      }
    }
    onFetchCats();
  }, [page]);

  const selectChangeBreeds = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'limit':
        apiService.fetchLimit(value).then(SetCats);
        SetLimit(value);
        break;
      case 'breeds':
        apiService.fetchCatForBreedsInfo(value).then(SetCats);
        break;

      default:
        return;
    }
  };

  const sortBreeds = e => {
    if (e.currentTarget.name.sortUp) {
      apiService.fetchSortUp().then(SetCats);
    }
    if (e.currentTarget.name.sortDown) {
      apiService.fetchSortDown().then(SetCats);
    }
  };

  const fetchNextPage = () => {
    SetPage(prevState => prevState + 1);
  };
  const fetchPrevPage = () => {
    SetPage(prevState => prevState - 1);
  };

  return (
    <div className={s.breeds_wrapper}>
      <BreedsFilter
        breeds={breeds}
        limit={limit}
        onChange={selectChangeBreeds}
        onClick={sortBreeds}
      />
      {reqStatus === 'pending' && <Loader />}
      <CatList cats={cats} />
      <div className={s.button_page}>
        {page > 1 && (
          <button className={s.button_prev} onClick={fetchPrevPage}>
            <PagePrev />
            <span>PREV</span>
          </button>
        )}
        {cats.length > 0 && (
          <button className={s.button_next} onClick={fetchNextPage}>
            <span>NEXT</span>
            <PageNext />
          </button>
        )}
      </div>
    </div>
  );
};

export default Breeds;
