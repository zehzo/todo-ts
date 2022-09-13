import api from '../api'

interface Task {
  _id: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}

export const listTasks = async(): Promise<Task[]> => {
  const { data } = await api.get('/todos');

  return data;
}

export const createTask = async (
  title: string,
  description: string,
): Promise<Task> => {
  const { data } = await api.post('/todos', {
    title,
    description
  });

  return data;
}

export const detailTask = async (taskId: string) => {
  const { data } = await api.get(`/todos/:${taskId}`);

  return data;
}

export const updateTask = async (
  taskId: string,
  taskInfo: {title: string;
  description: string; 
  }
): Promise<Task> => {
  const { data } = await api.put(`/todos/:${taskId}`, taskInfo);

  return data;
}

export const deleteTask = async (taskId: string) => {
  const { data } = await api.delete(`/todos/:${taskId}`)

  return data;
}