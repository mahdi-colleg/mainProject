import {ImageView, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    data: EntityType<ProductType>

    // data: {
    //     img: string,
    //     price: number,
    //     sale_price?: number,
    //     title: string,
    //     rate: number
    // }
}

export function MiniProductCard({data}: Props) {
    return (
        <>
            <div className="flex gap-3 lg:gap-5">
                <ImageView src={data.attributes.thumbnail?.data?.attributes.url} width={120} height={120} alt={"vertical product"}/>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-heading6 text-blue-300 mb-1">
                            {data.attributes.title}
                        </div>
                        <div className="flex gap-4">
                            <Rating rate={data.attributes.rate}/>
                        </div>
                    </div>
                    {
                        data.attributes.sell_price ?
                            <div>
                                <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                                <span className="text-heading-sm line-through text-gray-500">${data.attributes.price}</span>
                            </div>:
                            <span className="text-heading5 text-green-200">${data.attributes.price}</span>

                    }
                </div>
            </div>
        </>
    );
}