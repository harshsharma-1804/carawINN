import conf from '../conf/conf.json';
import { Client, Account, ID } from 'appwrite';

export class AuthService{
    constructor(){
        this.client
        .setEndpoint(conf.appwriteEndpoint)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({FullName,email,password}){
        try {
            const userAccount = await this.account.create(ID.unique() ,email,password,FullName);
            if(userAccount){
                return this.login({email,password});
            } else{
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;            
        }
    }

    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Server Error 502, ",error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;