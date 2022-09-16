import { TaskContainer } from './styles';
import removeButton from '../../assets/delete_button.svg';

interface TaskProps {
  title: string;
  description: string;
  deleteTask: () => void;
}

export function Task({ title, description, deleteTask }: TaskProps) {
  return (
    <TaskContainer>
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <button onClick={deleteTask}>
        <img src={removeButton} />
      </button>
    </TaskContainer>
  );
}
