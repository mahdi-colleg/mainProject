import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

export interface BasketType {
    uuid: any
    basket_items: Array<BasketItemType>
}

interface BasketItemType{
    id: number,
    quantity: number,
    product: {
        data: EntityType<ProductType>
    }
}
