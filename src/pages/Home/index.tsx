import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { MainHeader } from '../../components/MainHeader';

import { HomeContainer, MainContainer, WrapperContainer } from "./styles";
import { TaskList } from '../../components/TaskList/TaskList';
import { TasksProvider } from '../../contexts/TasksContext';

export function Home(){
  return (
    <HomeContainer>
      <Header />
      <WrapperContainer>
        <Sidebar />
        <MainContainer>
          <TasksProvider>
            <MainHeader />
            <TaskList/>
          </TasksProvider>
        </MainContainer>
      </WrapperContainer>
    </HomeContainer>
  );
}