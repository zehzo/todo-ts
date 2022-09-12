import { TaskContainer } from "./styles";

interface TaskProps {
  title: string;
  description: string;
}

export function Task({ title, description }: TaskProps) {
  return (
    <TaskContainer>
      <strong>{title}</strong>
      <strong>{description}</strong>
    </TaskContainer>
  );
}
