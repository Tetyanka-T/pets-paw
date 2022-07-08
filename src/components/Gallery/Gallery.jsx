import CatList from 'components/CatList/CatList';
import FormGallery from 'components/FormGallery/FormGallery';
import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as DownLoad } from '../../image/download.svg';

import s from './Gallery.module.scss';

const Gallery = () => {
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
      <FormGallery />
      <CatList />
    </div>
  );
};
export default Gallery;
