import TestModal from "../CreateTaskModal";
import { MainHeaderContainer } from "./styles";

export function MainHeader(){
  return(
    <MainHeaderContainer>
      <strong>Minhas Tasks</strong>
      <TestModal />
    </MainHeaderContainer>
  );
}