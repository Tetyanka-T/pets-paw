import { ReactComponent as ShowMore } from '../../image/update.svg';
import s from './GalleryFilter.module.scss';

const GalleryFilter = ({ breeds, onChange, limit, order, type, onClick }) => {
  return (
    <div className={s.formGallery}>
      <ul className={s.formGallery_listSelect}>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>ORDER</span>
          <select name="order" id="order" value={order} onChange={onChange}>
            <option value="Random">Random</option>
            <option value="Desc">Desc</option>
            <option value="Asc">Asc</option>
          </select>
        </li>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>TYPE</span>
          <select name="type" id="type" value={type} onChange={onChange}>
            <option value="All">All</option>
            <option value="jpg">Static</option>
            <option value="gif">Animed</option>
          </select>
        </li>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>BREEDS</span>
          <select name="breeds" id="breeds" value={breeds} onChange={onChange}>
            <option key="all" value="all">
              All
            </option>
            {breeds.map(breed => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </li>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>LIMIT</span>
          <select
            name="limit"
            id="limit"
            value={limit}
            onChange={onChange}
            className={s.formGallery_selectLimit}
          >
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>
        </li>
        <li>
          <button
            type="button"
            className={s.formGallery_showMore}
            onClick={onClick}
          >
            <ShowMore />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default GalleryFilter;
