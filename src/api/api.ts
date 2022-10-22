import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API || 'https://jose-todo-list-api.herokuapp.com/',
});

export default api;
