import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props{
    populate?: Array<"thumbnail" | "categories" | "gallery">
    filters?: {}
}

export function getAllProducts({populate, filters = {}}:Props):Promise<ApiResponseType<ProductType>> {
    return apiClient.get("/products", {
        params:{
            populate: populate?.join(","),
            filters:filters,
        }
    });
}