import styles from './Header.module.css';
import smallLogo from '../../assets/small_logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={smallLogo}></img>
    </header>
  );
}
