import { FC, ChangeEvent, useState } from 'react';
import { Dialog } from '@mui/material';
import { useDispatch } from 'react-redux';
import Input from 'components/shared/components/Input';
import { addUser } from 'store/leaderBoardReducer/actions';
import styles from './AddNewScoreModal.module.scss';

interface AddNewScoreModalProps {
  open: boolean;
  onClose: () => void;
}

const AddNewScoreModal: FC<AddNewScoreModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  const handleCreateNameUser = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCreateScoreUser = (e: ChangeEvent<HTMLInputElement>) => {
    setScore(+e.target.value);
  };

  const handleCreateUserSaveButton = () => {
    onClose();
    if (name && score) {
      dispatch(addUser(name, score));
      setName('');
      setScore(0);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.main}>
        <div className={styles.main__title}>Add new user</div>
        <div className={styles.main__input}>
          <Input name="newUserName" type="string" onChange={handleCreateNameUser} placeholder="Name:" value={name} />
        </div>
        <div className={styles.main__input}>
          <Input
            name="newUserScore"
            type="number"
            onChange={handleCreateScoreUser}
            placeholder="Score:"
            value={score}
          />
        </div>
        <button className={styles.main__btn} type="submit" onClick={handleCreateUserSaveButton}>
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default AddNewScoreModal;
