import axios from 'axios';
import { API_BASE_URL } from '../config.js';

export function getAllBooks(callback) {
    const url = `${API_BASE_URL}/books`;
    axios.get(url)
        .then(response => {
            callback(null, response.data);
        })
        .catch(error => {
            callback(error, null);
        });
}
