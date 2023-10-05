import styles from './Loader.module.scss';
import loader from 'assets/loader.gif'; 

export const Loader = () => (
  <div className={styles.loader} >
    <img src={loader} alt="Loading..." />
  </div>
);
