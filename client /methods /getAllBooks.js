import axios from 'axios';
import { API_BASE_URL } from '../config.js';

// Task 10: Get all books using async callback function
export function getAllBooks(callback) {
    const url = `${API_BASE_URL}/books`;

    axios.get(url)
        .then(response => {
            // Success: call callback with null error and data
            callback(null, response.data);
        })
        .catch(error => {
            // Error: call callback with error and null data
            callback(error, null);
        });
}
