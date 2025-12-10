import axios from 'axios';
import { API_BASE_URL } from '../config.js';

export async function searchByAuthor(author) {
    try {
        const url = `${API_BASE_URL}/author/${author}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
