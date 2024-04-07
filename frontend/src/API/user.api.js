import instance from './Axios';

export const login1API = async (loginemail) => {
        const params = new URLSearchParams({email: loginemail});
        const response = await instance.post('user/signin',params);
        const {fullName,email} = response.data.data;
        return {fullName,email};
        
}

export const login2API = async (email,password) => {
        const params = new URLSearchParams({email,password});
        const response = await instance.post('user/authenticate',params);
        return response;
}

export const registerAPI = async (fullName,email,password)=>{
        const params = new URLSearchParams({fullName,email,password});
        const response = await instance.post('user/signup',params);
        console.log("1");
        return response;
}

export const logoutAPI = async () => {
        const response = await instance.post('user/logout');
        return response.data;
}

export const googleOauthAPI = async () => {
        const response = await instance.get('user/auth/google');
        return response.data;
}

export const refreshTokenAPI = async () => {
        const response = await instance.get('user/refreshToken');
        return response.data;
}