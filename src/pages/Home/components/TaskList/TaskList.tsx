import { Task } from '../Task/Task';
import { TasksContext } from '../../../../contexts/TasksContext';
import { useContext } from 'react';
import { TaskListContainer } from './styles';


export function TaskList() {

  const { tasks } = useContext(TasksContext)

  return (
    <TaskListContainer>
      {tasks.map((task) => {
        return (
          <Task key={task._id} title={task.title} description={task.description} id={task._id}/>
        );
      })}
    </TaskListContainer>
  );
}
