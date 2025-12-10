import axios from 'axios';
import { API_BASE_URL } from '../config.js';

// Task 12: Search by Author using async/await
export async function searchByAuthor(author) {
    try {
        const url = `${API_BASE_URL}/author/${author}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
