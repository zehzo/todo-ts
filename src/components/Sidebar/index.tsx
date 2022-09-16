import profile from '../../assets/profile.svg';
import mediumLogo from '../../assets/medium_logo.svg';
import {
  ContentContainer,
  GreetingsContainer,
  SidebarContainer,
} from './styles';

export function Sidebar() {
  return (
    <SidebarContainer>
      <GreetingsContainer>
        <img src={profile} alt="" />
        <strong>Olá, Lucas Melo!</strong>
      </GreetingsContainer>
      <footer>
        <img src={mediumLogo}></img>
        <ContentContainer>
          <strong>do it!</strong>
          <span>seu todo app favorito :)</span>
        </ContentContainer>
      </footer>
    </SidebarContainer>
  );
}
