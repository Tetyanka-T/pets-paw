import { ReactComponent as ComeBack } from '../../image/come-back.svg';
import { useNavigate } from 'react-router-dom';
import s from './ComeBackButton.module.scss';

const ComeBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={s.galleryButton_comeBack}
      onClick={() => navigate(-1)}
    >
      <ComeBack />
    </button>
  );
};

export default ComeBackButton;
