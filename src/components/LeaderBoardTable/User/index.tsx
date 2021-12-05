import { FC, useState } from 'react';
import { Leader } from 'store/leaderBoardReducer/types';
import EditUserScoreModal from './EditUserScoreModal';
import editBtn from '../../../img/svg/editPencil.svg';
import styles from './User.module.scss';

interface IUserProps {
  leader: Leader;
  index: number;
  id: string;
  positionDifference: number;
}

const User: FC<IUserProps> = ({ leader, index, id, positionDifference }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main}>
      <span className={styles.main__number}>{index + 1}</span>
      <img src={leader.avatar} alt="avatar" />
      <span className={styles.main__score}>{leader.score}</span>
      <span className={styles.main__name}>{leader.name}</span>
      <div
        className={
          positionDifference >= 1
            ? styles.main__increasedPosition
            : positionDifference === 0
            ? styles.main__positionWithoutChanges
            : styles.main__decreasedPosition
        }
      >
        {positionDifference}
      </div>
      <button className={styles.main__editBtn} onClick={handleOpen}>
        <img src={editBtn} alt="editUser" />
      </button>
      <EditUserScoreModal open={open} onClose={handleClose} index={index} id={id} />
    </div>
  );
};

export default User;
