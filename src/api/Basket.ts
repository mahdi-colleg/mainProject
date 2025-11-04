import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketType} from "@/types/api/Basket";

export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>>{
    return await apiClient.get("/my-basket", {

    })
}