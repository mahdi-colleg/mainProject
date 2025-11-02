import apiClient from "@/api/config/ApiClient";
import {AuthResponseType} from "@/types/api/Auth";

interface RegisterData{
    username: string;
    password: string;
    email: string;
}
interface LoginData{
    identifier: string;
    password: string;
}

export function registerApiCall(data : RegisterData):Promise<AuthResponseType>{
    return apiClient.post("/auth/local/register", data)
}

export function loginApiCall(data : LoginData):Promise<AuthResponseType>{
    return apiClient.post("/auth/local", data)
}