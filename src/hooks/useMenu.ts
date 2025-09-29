import { useQuery } from "@tanstack/react-query";
import { EntityType, MenuItemType, MenuType, PopulateType } from "@/types";
import {ApiResponseType} from "@/types";
import {getMenu} from "@/api/Menu";

interface Props {
    position: string;
}

export function useMenu({ position }: Props) {
    const {
        data: menuData
    } = useQuery({
        queryKey: ["getMenu"],
        queryFn: (): Promise<ApiResponseType<MenuType>> => getMenu(),
    });

    let menuItems: null | PopulateType<MenuItemType> = null;

    if (menuData) {
        const findMenu = menuData.data.filter(
            (item: EntityType<MenuType>) => item.attributes.position === position
        );

        if (findMenu.length > 0) {
            menuItems = findMenu[0].attributes.menu_items;

            menuItems.data.sort((a, b) => {
                if (a.attributes.rank < b.attributes.rank) return -1;
                if (a.attributes.rank > b.attributes.rank) return 1;
                return 0;
            });
        }
    }

    return {
        data: menuItems
    };
}
