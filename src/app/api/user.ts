import {AxiosResponse} from 'axios';
import requests from "../../utils/requests";

export async function loginAndSignup(email: string, password: string): Promise<AxiosResponse>{
    return await requests.post(`/user/register`, {
        email,
        password,
    });
}
export async function getImages(): Promise<AxiosResponse>{
    return await requests.get(`/api/users/images`);
}