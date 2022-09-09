import styles from './Sidebar.module.css';
import profile from '../../assets/profile.svg';
import mediumLogo from '../../assets/medium_logo.svg';
import { useState } from 'react';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.message}>
          <img src={profile} alt="" />
          <strong>Olá, Lucas Melo!</strong>
        </div>
        <footer>
          <img src={mediumLogo}></img>
          <div className={styles.content}>
            <strong>do it!</strong>
            <span>seu todo app favorito :)</span>
          </div>
        </footer>
      </aside>
    </>
  );
}
