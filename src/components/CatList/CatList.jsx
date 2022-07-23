// import { ReactComponent as Favorite } from '../../image/hart-white.svg';
import s from './CatList.module.scss';

const CatList = ({ cats }) => {
  return (
    <>
      {cats && (
        <ul className={s.imageList}>
          {cats.map(cat => (
            <li key={cat.id} className={s.imageList_item}>
              <img src={cat.url} alt={cat.alt} className={s.imageList_photo} />
              {/* <p className={s.imageList_itemTitle}>{}</p> */}
              {/* <button
                className={s.imageList_itemButton}
                type="button"
                onClick={() => addFavorite()}
              >
                <Favorite />
              </button> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CatList;
