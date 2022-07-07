import Gallery from 'components/Gallery/Gallery';
import LinksPanel from 'components/LinksPanel/LinksPanel';
import SearchForm from 'components/SearchForm/SearchForm';

import s from './GalleryPage.module.scss';

const GalleryPage = () => {
  return (
    <div className={s.gallery_container}>
      <div className={s.gallery_search}>
        <SearchForm />
        <LinksPanel />
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
