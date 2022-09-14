import { TaskContainer } from "./styles";

interface TaskProps {
  title: string;
  description: string;
  deleteTask: () => void;
}

export function Task({title, description, deleteTask}: TaskProps) {
  return (
    <TaskContainer>
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <button onClick={deleteTask}>Remove</button>
    </TaskContainer>
  );
}
