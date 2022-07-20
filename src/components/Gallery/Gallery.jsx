import { useState, useEffect } from 'react';
import CatList from 'components/CatList/CatList';
import GalleryFilter from 'components/GalleryFilter/GalleryFilter';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as DownLoad } from '../../image/download.svg';
import * as apiService from '../../apiService/apiService';

import s from './Gallery.module.scss';

const Gallery = () => {
  const [cats, setCats] = useState();
  console.log(cats);
  const [breeds, setBreeds] = useState([]);

  // const [breedId, setBreedId] = useState()
  const [type, setType] = useState('');
  const [order, setOrder] = useState('');
  const [limit, setLimit] = useState('');
  const [page, SetPage] = useState('');
  // const [filterdCats, setFilterdCats] = useState(null);

  // const breedsInfo = breeds.map(breed => ({
  //   id: breed.id,
  //   nameBreed: breed.name,
  // }));

  // console.log(breedsInfo);

  useEffect(() => {
    apiService.fetchAllBreeds().then(setBreeds);
  }, []);

  // useEffect(() => {
  //   apiService.fetchCatData().then(setCats);
  // }, []);

  useEffect(() => {
    apiService.fetchAllCats().then(setCats);
  }, []);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'type':
        apiService.fetchType(value).then(setCats);
        setType(value);
        break;

      case 'order':
        apiService.fetchOrder(value).then(setCats);
        setOrder(value);
        break;

      case 'limit':
        apiService.fetchLimit(value).then(setCats);
        setLimit(value);
        break;
      // case 'breeds':
      //   if (value === breedsInfo)
      //     apiService.fetchCatForBreedsName(breedsInfo).then(setCats);
      //   setBreeds(value);
      //   break;

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
        <button type="button" className={s.galleryButton_download}>
          <DownLoad />
          <span className={s.button_title}>Upload</span>
        </button>
      </div>
      <GalleryFilter
        limit={limit}
        order={order}
        type={type}
        onChange={handleChange}
        breeds={breeds}
        // breedId={breedsInfo}
      />
      <CatList cats={cats} />
    </div>
  );
};
export default Gallery;
