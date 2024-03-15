import instance from './Axios';

export const login1API = async (email) => {
        const params = new URLSearchParams({email});
        const response = await instance.post('user/signin',params);
        return response.data;
}

export const login2API = async (email,password) => {
        const params = new URLSearchParams({email,password});
        const response = await instance.post('user/authenticate',params);
        return response;
}

export const registerAPI = async (fullName,email,password)=>{
        const params = new URLSearchParams({fullName,email,password});
        const response = await instance.post('user/signup',params);
        return response.data;
}