import {MiniProductCard} from "@/components";

interface Props {
    title: string
    data: Array<any>
}

export function ProductVerticalList({title, data}: Props) {
    return (
        <>
            <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-6">
                {
                    data.map((item, index) => {
                        return(<MiniProductCard data={item} key={index}/>)
                    })
                }
            </div>
        </>
    );
}