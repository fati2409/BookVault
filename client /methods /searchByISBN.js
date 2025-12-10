import axios from 'axios';
import { API_BASE_URL } from '../config.js';

export function searchByISBN(isbn) {
    const url = `${API_BASE_URL}/isbn/${isbn}`;
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}
