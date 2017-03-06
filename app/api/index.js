import axios from 'axios';


const API_URL = 'http://localhost:3000/api/0.1';

export const fetchBooks = () => axios.get(`${API_URL}/books`);

export const deleteBook = (book) => axios.delete(`${API_URL}/book/${book.id}`);

//TODO export const reserveBook = book => {}

//TODO export const returnBook = book => {}


