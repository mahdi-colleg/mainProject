import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {IconBox} from "@/components";
import {useContext} from "react";
import {BasketContext} from "@/store/BasketContext";

interface Props {
    productData: EntityType<ProductType>
}

export function ProductCardBottom({productData}: Props) {

    const basket = useContext(BasketContext);

    const currentProductInBasket = basket.getItem(productData.id);

    return (
        <div className="add-product">

            {
                currentProductInBasket ?
                    <div className="input-product__container border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[80px] flex justify-between">
                        <div className="flex flex-col justify-between">
                            <IconBox icon="icon-angle-small-up up" onClick={()=>basket.increaseItem(productData.id)} size={10}/>
                            <IconBox icon="icon-angle-small-down down" onClick={()=>basket.decreaseItem(productData.id)} size={10}/>
                        </div>
                        {
                            currentProductInBasket.quantity
                        }
                    </div> :
                    <button onClick={()=>basket.addItem(productData)} className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                        Adds +
                    </button>
            }
        </div>
    );
}