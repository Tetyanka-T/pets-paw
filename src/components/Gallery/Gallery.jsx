import CatList from 'components/CatList/CatList';
import FormGallery from 'components/FormGallery/FormGallery';
import { ReactComponent as ComeBack } from '../../image/come-back.svg';
import { ReactComponent as ComeBackWhite } from '../../image/back-transp.svg';
import { ReactComponent as DownLoad } from '../../image/download.svg';
import { ReactComponent as DownLoadWhite } from '../../image/download-transp.svg';
import s from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={s.gallery_wrapper}>
      <div className={s.galleryButton_container}>
        <button type="button" className={s.galleryButton_comeBack}>
          <ComeBack className={s.button_comeBack} />
          <ComeBackWhite className={s.button_comeBack_white} />
        </button>
        <button type="button" className={s.galleryButton_gallery}>
          GALLERY
        </button>
        <button type="button" className={s.galleryButton_download}>
          <DownLoad className={s.button_download} />
          <DownLoadWhite className={s.button_download_white} />
          <span className={s.button_title}>Upload</span>
        </button>
      </div>
      <FormGallery />
      <CatList />
    </div>
  );
};
export default Gallery;
