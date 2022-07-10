import { useState, useEffect } from 'react';
import CatList from 'components/CatList/CatList';
import GalleryFilter from 'components/GalleryFilter/GalleryFilter';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as DownLoad } from '../../image/download.svg';
import * as apiService from '../../apiService/apiService';

import s from './Gallery.module.scss';

const Gallery = () => {
  const [cats, setCats] = useState([]);
  // const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    apiService.fetchAllCats().then(setCats);
  }, []);

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
      <GalleryFilter />
      <CatList cats={cats} />
    </div>
  );
};
export default Gallery;
