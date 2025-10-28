import {IconBox} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProducts} from "@/api/Product";
import {useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props{
    inputClassName?: string,
}

interface FormInput{
    search_text: string
}

interface FilterData{
    title: {
        $containsi: string
    }
}

export function SearchForm({inputClassName = ""}: Props) {
    // TODO should implement form

    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([]);
    const {register, handleSubmit} = useForm<FormInput>();

    const mutation = useMutation({mutationFn: (data:FilterData)=>getAllProducts({filters: data})})

    const onSubmit = (data : FormInput)=>{

        mutation.mutate({
            title: {
                '$containsi': data.search_text
            }
        },{
            onSuccess: (response) => {
                setResultData(response.data)
            }
        })
    }

    return (
            <div className={"relative"}>
                <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                    <input type="text" {...register("search_text")} placeholder="Search for items"
                           className={`${inputClassName} text-xsmall text-gray-400 border-gray-300 w-full  focus:outline-none`}/>
                    <button type="submit"><IconBox icon={"icon-search"} size={22}/></button>
                </form>
                {
                    resultData &&
                    <div className={"absolute bg-white w-full left-0 right-0 top-14"}>
                        <ul>
                            {resultData.map((item:EntityType<ProductType>, index)=>{
                                return <li className={"p-4 hover:bg-green-200 hover:text-white cursor-pointer"} key={index}>{item.attributes.title}</li>
                            })}
                        </ul>
                    </div>
                }
            </div>
    );
}

