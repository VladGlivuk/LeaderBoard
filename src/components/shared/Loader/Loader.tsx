import { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  className: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={className}>
    <div className={styles.loadingioSpinnerSpinnerBsbz6ghdk4i}>
      <div className={styles.ldio6u3mzyn738n}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);
export default Loader;
