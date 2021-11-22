import { FC, useState } from 'react';
import { Leader } from 'components/store/leaderBoardReducer/types';
import EditUserScoreModal from './EditUserScoreModal';
import editBtn from '../../../img/svg/editPencil.svg';
import styles from './User.module.scss';

interface IUserProps {
  leader: Leader;
  index: number;
}

const User: FC<IUserProps> = ({ leader, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main}>
      <span className={styles.main__number}>{index + 1}</span>
      <img src={leader.avatar} alt="avatar" />
      <span className={styles.main__score}>{leader.score}</span>
      <span className={styles.main__name}>{leader.name}</span>
      <div className={styles.main__position}>2 places </div>
      <button className={styles.main__editBtn}>
        <img src={editBtn} alt="editUser" onClick={handleOpen} />
      </button>
      <EditUserScoreModal open={open} onClose={handleClose} index={index} />
    </div>
  );
};

export default User;
