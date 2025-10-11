import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props{
    populate?: Array<"thumbnail" | "categories" | "gallery">
    filters?: {
        is_popular?: boolean;
        is_popular_fruit?: boolean;
        is_best_seller?: boolean;
    }
}

interface Filters{
    is_popular?: {$eq: boolean}
    is_popular_fruit?: {$eq: boolean}
    is_best_seller?: {$eq: boolean}
}

export function getAllProducts({populate, filters}:Props):Promise<ApiResponseType<ProductType>> {

    const customFilters : Filters = {};

    filters?.is_popular && (customFilters.is_popular = {$eq: filters.is_popular})

    filters?.is_popular_fruit && (customFilters.is_popular_fruit = {$eq: filters.is_popular_fruit})

    filters?.is_best_seller && (customFilters.is_best_seller = {$eq: filters.is_best_seller})


    return apiClient.get("/products", {
        params:{
            populate: populate?.join(","),
            filters:customFilters,
        }
    });
}