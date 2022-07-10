import ComeBackButton from 'components/ComeBack/ComeBackButton';
import PanelVoting from 'components/PanelVoting/PanelVoting';
import s from './Voting.module.scss';

const Voting = () => {
  return (
    <div className={s.voting_wrapper}>
      <div className={s.voting_buttonContainer}>
        <ComeBackButton />
        <p className={s.voting_title}>VOTING</p>
      </div>
      <div className={s.card_thumb}>
        <img src="" alt="" width="640px" height="360px"></img>
        <PanelVoting />
      </div>
    </div>
  );
};

export default Voting;
