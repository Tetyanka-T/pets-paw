import { useState, useEffect } from 'react';
import CatList from 'components/CatList/CatList';
import GalleryFilter from 'components/GalleryFilter/GalleryFilter';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import Loader from 'components/Loader/Loader';
// import { ReactComponent as DownLoad } from '../../image/download.svg';
import * as apiService from '../../apiService/apiService';

import s from './Gallery.module.scss';

const Gallery = () => {
  const [cats, SetCats] = useState();
  const [breeds, SetBreeds] = useState([]);
  const [type, SetType] = useState('');
  const [order, SetOrder] = useState('');
  const [limit, SetLimit] = useState('');
  const [page, SetPage] = useState(0);
  const [reqStatus, setReqStatus] = useState('idle');

  useEffect(() => {
    async function onFetchCats() {
      try {
        setReqStatus('pending');
        const breeds = await apiService.fetchAllBreeds();
        const cats = await apiService.fetchAllCats(page);

        if (!breeds && !cats) {
          throw new Error();
        }
        SetBreeds(breeds);
        SetCats(cats);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
      }
    }
    onFetchCats();
  }, [page]);

  const onLoadMore = () => {
    SetPage(prevState => prevState + 1);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'type':
        apiService.fetchType(value).then(SetCats);
        SetType(value);
        break;

      case 'order':
        apiService.fetchOrder(value).then(SetCats);
        SetOrder(value);
        break;

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

  return (
    <div className={s.gallery_wrapper}>
      <div className={s.galleryButton_container}>
        <ComeBackButton />
        <button type="button" className={s.galleryButton_gallery}>
          GALLERY
        </button>
        {/* <button type="button" className={s.galleryButton_download}>
          <DownLoad />
          <span className={s.button_title}>Upload</span>
        </button> */}
      </div>
      <GalleryFilter
        limit={limit}
        order={order}
        type={type}
        onChange={handleChange}
        breeds={breeds}
        onClick={onLoadMore}
      />
      {reqStatus === 'pending' && <Loader />}
      <CatList cats={cats} />
    </div>
  );
};
export default Gallery;
