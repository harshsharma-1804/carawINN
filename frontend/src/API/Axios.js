import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:7000/api/v1/",
    withCredentials: true // Allow cookies to be sent with requests
});

instance.interceptors.response.use(
    response => {
        // Extract tokens from cookies
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name.trim() === 'refreshToken') { // Adjust the cookie name as needed
                // Store token in local storage
                localStorage.setItem('token', value);
            }
        });
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;