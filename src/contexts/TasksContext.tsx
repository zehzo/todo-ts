import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { createTask, deleteTask, listTasks } from "../api/tasks";

interface Task {
  _id: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}

interface CreateTaskInput {
  title: string,
  description: string
}

interface TasksContextType {
  tasks: Task[];
  addTask: (data: CreateTaskInput) => Promise<void>;
  fetchTasks: () => Promise<void>;
  removeTask: (data: string) => void;
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(async () => {
    const response = await listTasks();
    setTasks(response)
  }, [])

  const addTask = useCallback (async (data: CreateTaskInput) => {
    const {title, description} = data
    const response = await createTask(title, description)

    setTasks(state => [...state, response])
  }, [])

  const removeTask = async (taskIdWillBeDeleted: string) => {
    await deleteTask(taskIdWillBeDeleted)

    const taskListWithoutTheDeletedOne = tasks.filter((task) =>
      task._id !== taskIdWillBeDeleted
    )
    // console.log(taskListWithoutTheDeletedOne);
    setTasks(taskListWithoutTheDeletedOne)
  } 

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (<TasksContext.Provider
    value={{
      tasks,
      addTask,
      fetchTasks,
      removeTask
    }}>
      {children}
    </TasksContext.Provider>
  )
}