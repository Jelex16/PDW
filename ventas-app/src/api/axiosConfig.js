// src/api/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api', // Aca va la URL de tu backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;
