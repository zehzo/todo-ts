import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import api from "../api/api";

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
  fetchTasks: () => Promise<void>
  // createTask: (data: CreateTaskInput) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(async () => {
    const response = await api.get('/todos', {
      params: {
        _sort: 'createAt',
        _order: 'desc',
      },
    })
    setTasks(response.data)
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (<TasksContext.Provider
    value={{
      tasks,
      fetchTasks
    }}>
      {children}
    </TasksContext.Provider>
  )
}