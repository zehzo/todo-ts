import styles from './App.module.css';

import './global.css';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  return (
    <div className={styles.box}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Tasks />
        </main>
      </div>

    </div>
  );
}

export default App;
