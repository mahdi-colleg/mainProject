import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketType} from "@/types/api/Basket";
import {UpdateBasketData} from "@/types/api/UpdateBasketData";


export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>>{
    return await apiClient.get("/my-basket")
}

export async function updateBasketApiCall(data: UpdateBasketData){
    return await apiClient.put("/my-basket", {
        data: data,
    })
}