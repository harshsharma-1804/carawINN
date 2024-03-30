import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:7000/api/v1/",
    withCredentials: true // Allow cookies to be sent with requests
});

export default instance;