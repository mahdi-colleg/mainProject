import Link from "next/link";
import {IconBox} from "@/components";
import {browsCategoryMock} from "@/mock/browsCategory";
import {ApiResponseType, EntityType, MenuItemType, MenuType, PopulateType} from "@/types";
import {useQuery} from "@tanstack/react-query";
import {getMenu} from "@/api/Menu";
import {useMenu} from "@/hooks/useMenu";
import React, {useEffect, useState} from "react";

export function Menu() {

    const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

    const {data: mainMenuData} = useMenu({position: "main_menu"});
    const {data: browsCategory} = useMenu({position: "brows-category"})

    const browsCategoryBtnHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();
        setShowCategoryMenu(prevState => !prevState);
    }
    const browsItemHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();
    }

    useEffect(() => {
        const clickHandler =  () => {
            setShowCategoryMenu(false)
        }
        document.addEventListener("click",clickHandler);
        return () => {
            document.removeEventListener("click", clickHandler)
        }
    }, []);


    return (
        <>
            <div className={"relative"}>

                <div onClick={browsCategoryBtnHandler} className="flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox icon={"icon-apps"} size={24} title={"Browse All Categories"} link={"#"} titleClassName={"text-medium ml-4"}/>
                    <IconBox icon={"icon-angle-small-down"} size={24}/>
                </div>

                <div onClick={browsItemHandler} className={`${showCategoryMenu ? "flex" : "hidden"} absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default`}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            browsCategory &&
                            browsCategory.data.map((item:EntityType<MenuItemType>, index:number) => {
                                    return (
                                        <IconBox key={index} link={item.attributes.link} icon={item.attributes.icon_name} size={30} title={item.attributes.title} titleClassName={"text-heading-sm text-blue-300"} path={item.attributes.icon_path} linkClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"}/>
                                    )
                                }
                            )
                        }

                        <IconBox link={"#"} icon={"icon-add"} size={24} title={"More Categories"} titleClassName={"text-heading-sm text-blue-300"} linkClassName={"gap-4 justify-center w-full mt-[17px]"}/>
                    </div>
                </div>
            </div>




            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {
                        mainMenuData ?
                        mainMenuData.data.map((item: EntityType<MenuItemType>, index:number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox link={item.attributes.link} icon={item.attributes.icon_name} title={item.attributes.title} size={24}/> :
                                            <Link href={item.attributes.link} className="flex items-center gap-1">{item.attributes.title}</Link>

                                    }
                                </li>
                            )
                        }):
                            <div>loading...</div>
                    }


                </ul>
            </nav>
        </>
    );
}

