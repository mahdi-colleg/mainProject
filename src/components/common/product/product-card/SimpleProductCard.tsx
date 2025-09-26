import {Badge, IconBox, ImageView, Rating} from "@/components";
import Link from "next/link";

interface Props {
    data: {
        title: string;
        category: string;
        price: number;
        sale_price: number;
        weight: number;
        rate: number;
        unit: string;
        img: string;
        label: string;
        total?: number;
        sold?: number;
    }
}

export function SimpleProductCard({data}: Props) {
    return (
        <div
            className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
            <Badge badge={data.label} price={data.price} sale_price={data.sale_price} />
            <div
                className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-heart text-brand1"} size={15}/>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-shuffle"} size={15}/>
                </div>
                <div className="p-2.5 hover:bg-green-150">
                    <IconBox icon={"icon-eye"} size={15}/>
                </div>
            </div>
            <ImageView src={data.img} alt={"popular"} width={210} height={168} className={"m-auto w-full aspect-[3/2] mb-[28px]"}/>
            <div className="flex flex-col gap-2">
                <div className="text-gray-500 text-xsmall">{data.category}</div>
                <Link href={"#"}><h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden">{data.title}</h3></Link>
                <div className="flex gap-4">
                    <Rating rate={data.rate}/>
                </div>
                <div className="font-lato text-xsmall text-gray-500">{data.weight} {data.unit}</div>
            </div>
            {
                data.total && data.sold ?
                    <>
                        <div className="flex items-center justify-between mt-3">
                            {
                                data.sale_price ?
                                    <div>
                                        <span className="text-heading5 text-green-200">${data.sale_price}</span>
                                        <span className="text-heading-sm line-through text-gray-500">${data.price}</span>
                                    </div>:
                                    <span className="text-heading5 text-green-200">${data.price}</span>

                            }

                        </div>
                        <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                            <div style={{width: `${(data.sold/data.total)*100}%`}} className={`bg-green-200 h-[4px] rounded-[2px]`}></div>
                        </div>
                        <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {data.sold}/{data.total}</div>
                        <div className="mt-[23px]">
                            <button
                                className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                <IconBox icon={"icon-shopping-cart"} size={22}/>
                                <span className="text-heading-sm">Add To Card</span>
                            </button>
                        </div>
                    </>:
                    <div className="flex items-center justify-between mt-3">
                        {
                            data.sale_price ?
                                <div>
                                    <span className="text-heading5 text-green-200">${data.sale_price}</span>
                                    <span className="text-heading-sm line-through text-gray-500">${data.price}</span>
                                </div>:
                                <span className="text-heading5 text-green-200">${data.price}</span>

                        }
                        <div className="add-product">
                            <button
                                className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                                Adds +
                            </button>

                            <div
                                className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                                <input type="number" value="1"
                                       className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"/>
                                <div className="flex flex-col justify-between">
                                    <IconBox icon={"icon-angle-small-up up"} size={10}/>
                                    <IconBox icon={"icon-angle-small-down down"} size={10}/>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}