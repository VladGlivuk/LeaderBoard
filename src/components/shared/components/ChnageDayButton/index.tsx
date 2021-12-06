import { FC } from 'react';
import styles from './ChangeDayButton.module.scss';

interface ChangeDayButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
  className: string;
}

const ChangeDayButton: FC<ChangeDayButtonProps> = ({ label, onClick, disabled, className }) => (
  <div className={styles.main}>
    <button onClick={onClick} disabled={disabled} type="submit" className={className}>
      {label}
    </button>
  </div>
);

export default ChangeDayButton;
