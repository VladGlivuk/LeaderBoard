import { Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Input from 'components/shared/components/Input';
import { Leader } from 'store/leaderBoardReducer/types';
import { IStore } from 'store';
import { editUser } from 'store/leaderBoardReducer/actions';
import styles from './ModalWindow.module.scss';

interface EditUserScoreModalProps {
  open: boolean;
  onClose: () => void;
  index: number;
  id: string;
}

const EditUserScoreModal: FC<EditUserScoreModalProps> = ({ open, onClose, index, id }) => {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState('');
  const [editScore, setEditScore] = useState(0);

  const users: Array<Leader> = useSelector((store: IStore) => store.leaderBoard.allUsers);

  const handleEditNameUser = (e: ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };

  const handleEditScoreUser = (e: ChangeEvent<HTMLInputElement>) => {
    setEditScore(+e.target.value);
  };

  const handleEditUserButton = () => {
    onClose();
    dispatch(editUser(id, editName, editScore));
  };

  useEffect(() => {
    setEditName(users[index].name);
    setEditScore(users[index].score);
  }, [users, index]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.main}>
        <div className={styles.main__title}>Edit user Score</div>
        <div className={styles.main__input}>
          <Input name="editName" type="string" onChange={handleEditNameUser} placeholder="" value={editName} />
        </div>
        <div className={styles.main__input}>
          <Input name="editScore" type="number" onChange={handleEditScoreUser} placeholder="" value={editScore} />
        </div>
        <button className={styles.main__btn} type="submit" onClick={handleEditUserButton}>
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default EditUserScoreModal;
