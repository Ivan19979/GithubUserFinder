import styles from './TheHeader.module.scss';
import { ThemeSwither } from 'components/ThemeSwither';


export const TheHeader = () => (
  <div className={styles.TheHeader} >
    <div className={styles.logo} >
      devfinder
    </div>
    <ThemeSwither />
  </div>
);
