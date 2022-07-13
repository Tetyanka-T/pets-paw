import { useState, useEffect } from 'react';
import CatList from 'components/CatList/CatList';
import GalleryFilter from 'components/GalleryFilter/GalleryFilter';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as DownLoad } from '../../image/download.svg';
import * as apiService from '../../apiService/apiService';

import s from './Gallery.module.scss';

const Gallery = () => {
  const [cats, setCats] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [filtrCat, setFiltrCat] = useState('');

  const [type, setType] = useState('');
  const [order, setOrder] = useState('');
  const [limit, setLimit] = useState('');
  const breedId = breeds.map(breed => breed.id);

  useEffect(() => {
    apiService.fetchAllBreeds().then(setBreeds);
  }, []);

  useEffect(() => {
    apiService.fetchAllCatsParams(type, order, limit, breedId).then(setCats);
  }, [breedId, limit, order, type]);

  const changeFiltred = e => {
    setBreeds(e.currentTarget.value);
    setOrder(e.currentTarget.value);
    setType(e.currentTarget.value);
    setLimit(e.currentTarget.value);
  };
  // ???
  const showFiltredCats = () => {
    return cats.fiter(cat => cat.name.includes(filtrCat));
  };
  const filtredCats = showFiltredCats();

  return (
    <div className={s.gallery_wrapper}>
      <div className={s.galleryButton_container}>
        <ComeBackButton />
        <button type="button" className={s.galleryButton_gallery}>
          GALLERY
        </button>
        <button type="button" className={s.galleryButton_download}>
          <DownLoad />
          <span className={s.button_title}>Upload</span>
        </button>
      </div>
      <GalleryFilter onChange={changeFiltred} />
      <CatList cats={filtredCats} />
    </div>
  );
};
export default Gallery;
