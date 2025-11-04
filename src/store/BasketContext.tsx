import {createContext, ReactNode, useReducer} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    children: ReactNode;
}

interface ProductItem{
    productId: number;
    title: string;
    price: number;
    img?: string;
    quantity: number;
}

export const BasketContext = createContext<{
    basketItems: Array<ProductItem>,
    addItem: (product: EntityType<ProductType>)=>void,
    increaseItem: (productId: number)=>void,
    decreaseItem: (productId: number)=>void,
    deleteItem: (productId: number)=>void,
    getItem: (productId: number) => undefined | ProductItem,

}>({
    basketItems : [],
    addItem: (product: EntityType<ProductType>)=>{},
    increaseItem: (productId: number)=>{},
    decreaseItem: (productId: number)=>{},
    deleteItem: (productId: number)=>{},
    getItem: (productId: number)=> undefined,
});

type Action = {type: "ADD-ITEM", product: EntityType<ProductType>}
            |  {type: "INCREASE-ITEM", productId: number}
            |  {type: "DECREASE-ITEM", productId: number}
            |  {type: "DELETE-ITEM", productId: number}

const basketReducer = (currentState: ProductItem[], action: Action) => {
    switch (action.type) {
        case "ADD-ITEM":
            return [
                ...currentState,
                {
                    productId: action.product.id,
                    title: action.product.attributes.title,
                    img: action.product.attributes.thumbnail?.data?.attributes.url,
                    price: action.product.attributes.price,
                    quantity: action.product.attributes.quantity,
                }
            ]
        case "INCREASE-ITEM":
            return currentState.map((item) => {
                if (item.productId === action.productId) {
                    const availableStock = 8;
                    if (item.quantity < availableStock) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        window.alert(`Only ${availableStock} items available for ${item.title}.`);
                        return item;
                    }
                }
                return item;
            });
        case "DECREASE-ITEM":
            const currentProduct = currentState.find((it) => it.productId === action.productId);

            if (currentProduct && currentProduct.quantity === 1) {
                return currentState.filter(it => it.productId !== action.productId);
            }
            return currentState.map((item)=>{
                if (item.productId === action.productId) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item;
            })
        case "DELETE-ITEM":
            return currentState.filter(it => it.productId !== action.productId);
        default:
            return currentState;
    }
};


export const BasketContextProvider = ({children}:Props) => {

    const [basketItems, dispatch] = useReducer(basketReducer, []);

    const addItemHandler = (product: EntityType<ProductType>)=>{
        dispatch({type: "ADD-ITEM", product: product})
    };

    const increaseItemHandler = (productId: number)=>{
        dispatch({type: "INCREASE-ITEM", productId: productId})
    };

    const decreaseItemHandler = (productId: number)=>{
        dispatch({type: "DECREASE-ITEM", productId: productId})
    };

    const deleteItemHandler = (productId: number)=>{
        dispatch({type: "DELETE-ITEM", productId: productId})
    };

    const getItemHandler = (productId: number): ProductItem | undefined =>{
        return basketItems.find((it) => it.productId === productId);
    }


    return(
        <BasketContext.Provider value={{basketItems: basketItems,getItem: getItemHandler, addItem: addItemHandler, increaseItem: increaseItemHandler, decreaseItem: decreaseItemHandler, deleteItem: deleteItemHandler}}>{children}</BasketContext.Provider>
    )
}