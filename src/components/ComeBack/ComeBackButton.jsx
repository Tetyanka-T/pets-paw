import { ReactComponent as ComeBack } from '../../image/come-back.svg';

import s from './ComeBackButton.module.scss';

const ComeBackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      type="button"
      className={s.galleryButton_comeBack}
      onClick={() => goBack()}
    >
      <ComeBack />
    </button>
  );
};

export default ComeBackButton;
