import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../Task/Task';
import TestModal from '../CreateTaskModal';

interface Task {
  title: string;
  content: string;
}

export function TaskList() {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState(['']);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTaskList([...taskList, newTask]);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function deleteTask(taskWillBeDeleted: string) {
    const taskListWithoutDeletedOne = taskList.filter((task) => {
      return task !== taskWillBeDeleted;
    });
    setTaskList(taskListWithoutDeletedOne);
  }

  return (
    <div>
      <header></header>
      <form onSubmit={handleCreateNewTask}>
        <strong>Insira a tarefa aqui: </strong>
        <textarea
          name="task"
          value={newTask}
          placeholder="Insira a sua tarefa aqui"
          onChange={handleNewTaskChange}
        ></textarea>
        <button type="submit">Adicionar</button>
      </form>
      <div>
        {taskList.map((task) => {
          return (
            <>
              <Task key={task} content={task} />
            </>
          );
        })}
      </div>
      <TestModal/>
    </div>
  );
}
