import { FC, useState } from 'react';
import AddNewScoreModal from './AddNewScoreModal';
import styles from './AddNewScore.module.scss';

const AddNewScore: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main}>
      <button className={styles.main__button} type="submit" onClick={handleOpen}>
        + Add new score
      </button>
      <AddNewScoreModal open={open} onClose={handleClose} />
    </div>
  );
};

export default AddNewScore;
