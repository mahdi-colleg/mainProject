import {FeaturedCategoriesMock} from "@/mock/featuredCategories";
import Link from "next/link";
import {ImageView} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getFeaturedCategory} from "@/api/Category";
import {CategoryType} from "@/types/api/Category";
import {ApiResponseType, EntityType} from "@/types";


export function FeaturedCategories() {

    const{data: categoryData} = useQuery<ApiResponseType<CategoryType>>({queryKey: [getFeaturedCategory.name], queryFn: ()=>getFeaturedCategory()});

    return (
        <div className={"flex flex-wrap justify-between gap-[10px]"}>
            {
                categoryData &&
                categoryData.data.map((item:EntityType<CategoryType>, index:number)=>{
                    return (
                        <Link key={index} href={item.attributes.link ?? "#"} style={{backgroundColor: item.attributes.color}}
                           className="basis-1 grow flex flex-col justify-center items-center text-blue-300 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                            <ImageView src={item.attributes.thumbnail.data?.attributes.url ?? ""} width={94} height={84} alt="cat" className="mb-2 lg:mb-4"/>
                            <h3 className="text-[12px] text-bold sm:text-heading-sm lg:text-heading6 text-center">{item.attributes.title}</h3>
                            <span className="text-xsmall text-gray-400 hidden xl:flex">{item.attributes.product_count} items</span>
                        </Link>
                    )
                })
            }
        </div>
    )
}