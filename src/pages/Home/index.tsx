import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainHeader } from './components/MainHeader';

import { HomeContainer, MainContainer, WrapperContainer } from "./styles";

export function Home(){
  return (
    <HomeContainer>
      <Header />
      <WrapperContainer>
        <Sidebar />
        <MainContainer>
          <MainHeader />
        </MainContainer>
      </WrapperContainer>
    </HomeContainer>
  );
}