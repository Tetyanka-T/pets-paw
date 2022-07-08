import { ReactComponent as ComeBack } from '../../image/come-back.svg';

import s from './ComeBackButton.module.scss';

const ComeBackButton = () => {
  return (
    <button type="button" className={s.galleryButton_comeBack}>
      <ComeBack />
    </button>
  );
};

export default ComeBackButton;
