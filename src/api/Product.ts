import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props{
    populate?: Array<"thumbnail" | "categories" | "gallery">
    filters?: {
        is_popular?: boolean;
    }
}

interface Filters{
    is_popular?: {$eq: boolean}
}

export function getAllProducts({populate, filters}:Props):Promise<ApiResponseType<ProductType>> {

    const customFilters : Filters = {};

    if (filters?.is_popular) {
        customFilters.is_popular = {$eq: filters.is_popular}
    }

    return apiClient.get("/products", {
        params:{
            populate: populate?.join(","),
            filters:customFilters,
        }
    });
}