import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';

import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TaskList } from './components/TaskList/TaskList';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.box}>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <TaskList />
          </main>
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
