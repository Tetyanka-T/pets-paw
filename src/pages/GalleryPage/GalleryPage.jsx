import Gallery from 'components/Gallery/Gallery';
import Search from 'components/Search/Search';

import s from './GalleryPage.module.scss';

const GalleryPage = () => {
  return (
    <div className={s.gallery_container}>
      <Search />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
