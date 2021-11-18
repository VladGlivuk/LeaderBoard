import { FC } from "react";
import { Dialog } from "@mui/material";
import ModalInput from "../Input";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  open: boolean;
  title: string;
  onClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ open, onClose, title }) => {
  const handleScoreUser = () => {};

  const handleNameUser = () => {};

  const handleSaveButton = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.main}>
        <div className={styles.main__title}>{title}</div>
        <div className={styles.main__input}>
          <ModalInput
            name="userName"
            type="string"
            onChange={handleNameUser}
            placeholder="Name:"
          />
        </div>
        <div className={styles.main__input}>
          <ModalInput
            name="userScore"
            type="number"
            onChange={handleScoreUser}
            placeholder="Score:"
          />
        </div>
        <button
          className={styles.main__btn}
          type="submit"
          onClick={handleSaveButton}
        >
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default ModalWindow;
