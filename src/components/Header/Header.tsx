import smallLogo from '../../assets/small_logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={smallLogo}></img>
    </HeaderContainer>
  );
}
