import { FC, useState } from "react";
import styles from "./User.module.scss";
import avatar from "../../../img/png/secondPerson.png";
import editBtn from "../../../img/svg/editPencil.svg";
import ModalWindow from "../../shared/components/ModalWindow";

const User: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main}>
      <span className={styles.main__number}>1st</span>
      <img src={avatar} alt="31231" />
      <span className={styles.main__score}>415</span>
      <span className={styles.main__name}>Nicola Greaves</span>
      <div className={styles.main__position}>2 places </div>
      <button className={styles.main__editBtn}>
        <img src={editBtn} alt="editUser" onClick={handleOpen} />
      </button>
      <ModalWindow title="Edit user score" open={open} onClose={handleClose} />
    </div>
  );
};

export default User;
