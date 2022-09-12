import { Task } from '../Task/Task';
import { useContextSelector } from 'use-context-selector'
import { TasksContext } from '../../../../contexts/TasksContext';

export function TaskList() {
  // const [taskList, setTaskList] = useState<Task[]>([]);

  
  // async function loadTasks(){
  //   const response = await listTasks()

  //   setTaskList(response);
  // }

  // useEffect(() => {
  //   loadTasks;
  // }, []);
  // function handleCreateNewTask(event: FormEvent) {
  //   event.preventDefault();

  //   setTaskList([...taskList, newTask]);
  //   setNewTask('');
  // }

  // function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setNewTask(event.target.value);
  // }

  // function deleteTask(taskWillBeDeleted: string) {
  //   const taskListWithoutDeletedOne = taskList.filter((task) => {
  //     return task !== taskWillBeDeleted;
  //   });
  //   setTaskList(taskListWithoutDeletedOne);
  // }

  // const tasks = useContextSelector(TasksContext, (context) => {
  //   return context.tasks
  // })

  return (
    <>
      <p>Tasks</p>
      {/* {tasks.map((task) => {
        return (
          <Task key={task._id} title={task.title} description={task.description}/>
        );
      })} */}
    </>
  );
}
