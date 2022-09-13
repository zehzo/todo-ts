import { useContext } from "use-context-selector";
import { TasksContext } from "../../../../contexts/TasksContext";
import { TaskContainer } from "./styles";

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

export function Task({title, description, id}: TaskProps) {
  const { removeTask } = useContext(TasksContext)
  
  return (
    <TaskContainer>
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <button onClick={() => removeTask(id)}>Remover</button>
    </TaskContainer>
  );
}
