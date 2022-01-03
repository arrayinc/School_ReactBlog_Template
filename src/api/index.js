import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.86.64:5000' });

export const fetchComments = () => API.get('/comments');
export const addComment= (newComment) => API.post('/comments', newComment);
