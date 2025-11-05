import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketType} from "@/types/api/Basket";
import {UpdateBasketData} from "@/types/api/UpdateBasketData";


export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>>{


    const token = window.localStorage.getItem("token");
    const uuid = window.localStorage.getItem("uuid");

    if (!token && !uuid) {
        const response: ApiResponseSingleType<BasketType> = await apiClient.post("/my-basket");
        window.localStorage.setItem("uuid", response.data.attributes.uuid)
        return response
    }

    if (uuid){
        return await apiClient.get("/my-basket", {
            params:{
                uuid: uuid
            }
        })
    }



    return await apiClient.get("/my-basket")
}

export async function updateBasketApiCall(data: UpdateBasketData): Promise<ApiResponseSingleType<BasketType>>{

    const uuid = window.localStorage.getItem("uuid");

    if (uuid){
        return await apiClient.put("/my-basket", {
            data: data,
        }, {
            params:{
                uuid: uuid
            }
        })
    }

    return await apiClient.put("/my-basket", {
        data: data,
    })
}

export async function UUID2UserApiCall(uuid: string) : Promise<ApiResponseSingleType<BasketType>>{
    return await apiClient.put("/basket2User" + uuid)
}