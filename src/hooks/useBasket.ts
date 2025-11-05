import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {basketApiCall, updateBasketApiCall} from "@/api/Basket";
import {UpdateBasketData} from "@/types/api/UpdateBasketData";

export function useBasket(){
    const queryClient = useQueryClient()

    const {data: basketData} = useQuery({queryKey: ["get-basket"], queryFn: basketApiCall})

    const mutate = useMutation({mutationFn: updateBasketApiCall});

    const basketItems = basketData?.data.attributes.basket_items ?? [];


    const addItemHandler = (productId: number)=>{

        const prepareUpdateData = basketItems.map((item)=>{
            return {
                product: {
                    connect: [{
                        id: item.product.data.id
                    }]
                },
                quantity: item.quantity
            }
        })

        prepareUpdateData.push({
            product: {
                connect: [{
                    id: productId
                }]
            },
            quantity: 1
        })

        const updateData : UpdateBasketData = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {onSuccess: (response) => {
                queryClient.invalidateQueries({queryKey: ["get-basket"]})
            }})
    }


    return {basketItems: basketItems, addItem: addItemHandler};

}