import {AxiosResponse} from 'axios';
import requests from "../../utils/requests";

export async function loginAndSignup(email: string, password: string):Promise<AxiosResponse<any, any>>{
    return await requests.post(`/api/v1/user/register`, {
        email,
        password,
    });
}
export async function getImages(): Promise<AxiosResponse>{
    return await requests.get(`/api/v1/users/images`);
}