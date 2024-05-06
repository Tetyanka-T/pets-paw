import s from './CatList.module.scss';

const CatList = ({ cats }) => {
  return (
    <>
      {cats && (
        <ul className={s.imageList}>
          {cats.map(cat => (
            <li key={cat.id} className={s.imageList_item}>
              <img src={cat.url} alt={cat.alt} className={s.imageList_photo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CatList;
