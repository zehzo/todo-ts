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