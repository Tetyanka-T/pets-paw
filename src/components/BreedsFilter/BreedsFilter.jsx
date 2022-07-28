import ComeBackButton from 'components/ComeBack/ComeBackButton';
import { ReactComponent as SortButtonUp } from '../../image/sort-up.svg';
import { ReactComponent as SortButtonDown } from '../../image/sort-down.svg';
import s from './BreedsFilter.module.scss';

const BreedsFilter = ({ onChange, breeds, onClick, limit }) => {
  return (
    <div className={s.breeds_button}>
      <ComeBackButton />
      <p className={s.breeds_title}>BREEDS</p>
      <select
        value={breeds}
        id="breeds"
        name="breeds"
        onChange={onChange}
        className={s.select_breeds}
      >
        <option key="all" value="all">
          All breeds
        </option>
        {breeds.map(breed => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      <select
        name="limit"
        id="limit"
        value={limit}
        className={s.select_limit}
        onChange={onChange}
      >
        <option value="5">Limit: 5</option>
        <option value="10">Limit: 10</option>
        <option value="15">Limit: 15</option>
        <option value="20">Limit: 20</option>
      </select>

      <button
        type="button"
        name="Asc"
        className={s.button_sort}
        onClick={onClick}
      >
        <SortButtonUp />
      </button>

      <button
        type="button"
        name="Desc"
        className={s.button_sort}
        onClick={onClick}
      >
        <SortButtonDown />
      </button>
    </div>
  );
};

export default BreedsFilter;
