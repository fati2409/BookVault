import axios from 'axios';
import { API_BASE_URL } from '../config.js';

export async function searchByTitle(title) {
    try {
        const url = `${API_BASE_URL}/title/${title}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
