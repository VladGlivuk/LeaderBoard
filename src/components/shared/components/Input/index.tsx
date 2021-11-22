import { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';

export interface InputProps {
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ placeholder, name, type, onChange, value }) => (
  <input className={styles.main} type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} />
);

export default Input;
