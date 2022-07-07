// import { useState } from 'react';
import { ReactComponent as ShowMore } from '../../image/update.svg';
import { ReactComponent as ShowMoreWhite } from '../../image/update-transp.svg';
import s from './FormGallery.module.scss';

const FormGallery = () => {
  //   const [breeds, setBreeds] = useState([]);
  return (
    <form className={s.formGallery}>
      <ul className={s.formGallery_listSelect}>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>ORDER</span>
          {/* className={s.formGallery_select_order} */}
          <select name="order" id="order">
            <option value="Random/Desc/Asc">Random</option>
            <option value="Desc">Desc</option>
            <option value="Asc">Asc</option>
          </select>
        </li>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>TYPE</span>
          <select name="type" id="type">
            <option value="All/Static/Animated">Static</option>
            <option value="All">All</option>
            <option value="Animated">Animed</option>
          </select>
        </li>
        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>BREEDS</span>
          <select name="breeds" id="breeds">
            <option value="none">None</option>
            {/* {breeds.map(breed => (
          <option value={breed.breed}>{breed.breed}</option>
        ))} */}
          </select>
        </li>

        <li className={s.formGallery_lable}>
          <span className={s.formGallery_lableTitle}>LIMIT</span>
          <select name="limit" id="limit" className={s.formGallery_selectLimit}>
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>
        </li>

        <li>
          <button type="button" className={s.formGallery_showMore}>
            <ShowMore className={s.formGallery_showMore_pink} />
            <ShowMoreWhite className={s.formGallery_showMore_white} />
          </button>
        </li>
      </ul>
    </form>
  );
};
export default FormGallery;
