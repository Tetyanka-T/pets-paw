import ComeBackButton from 'components/ComeBack/ComeBackButton';
import s from './CatCard.module.scss';

const CatCard = () => {
  return (
    <div className={s.catCard_container}>
      <div className={s.catCard_Button}>
        <ComeBackButton />
        <p className={s.catCard_Button_title}>BREEDS</p>
        <p className={s.catCard_Button_catId}>28</p>
      </div>

      <div className={s.card_thumb}>
        <img src="" alt=""></img>
      </div>
      <div className={s.wrapper_desc}>
        <h2 className={s.cat_breed}>Basenji</h2>
        <p className={s.cat_family}>Family companion cat</p>
        <div className={s.cat_desc}>
          <p className={s.cat_temp}>
            Temperament:
            <span className={s.cat_span}>
              Active, Energetic, Independent, Intelligent, Gentle
            </span>
          </p>
          <ul className={s.cat_desc_list}>
            <li className={s.cat_desc_listItem}>
              Origin: <span className={s.cat_span}>United States</span>
            </li>
            <li className={s.cat_desc_listItem}>
              Weight: <span className={s.cat_span}>3 - 5 kgs</span>
            </li>
            <li className={s.cat_desc_listItem}>
              Life span: <span className={s.cat_span}>14 - 15 years</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
