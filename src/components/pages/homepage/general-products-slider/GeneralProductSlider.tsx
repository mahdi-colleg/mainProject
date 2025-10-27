import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {getAllProducts} from "@/api/Product";
import { InView } from "react-intersection-observer";



export function GeneralProductSlider() {

    const {data: topRateData, refetch} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProducts.name, "top-rate"],
        queryFn: ()=>getAllProducts(
            {
                populate:["thumbnail"],
                sort: ["rate:desc"],
                pagination: {
                    start: 0,
                    limit: 3,
                    withCount: false
                }
            }),
        enabled: false,
    })



    return (
        <Swiper
            modules={[Autoplay]}
            breakpoints= {
                {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
            }
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
        >

            <SwiperSlide>
                {topRateData && <ProductVerticalList title={"Top Selling"} data={topRateData.data}/>}
            </SwiperSlide>

            <SwiperSlide>
                <InView as="div" onChange={(inView, entry) => inView && refetch()}>
                    {topRateData && <ProductVerticalList title={"Top Rated"} data={topRateData.data}/>}
                </InView>
            </SwiperSlide>

            <SwiperSlide>
                {topRateData && <ProductVerticalList title={"Recently Added"} data={topRateData.data}/>}
            </SwiperSlide>

            <SwiperSlide>
                {topRateData && <ProductVerticalList title={"Trending Products"} data={topRateData.data}/>}
            </SwiperSlide>
        </Swiper>
    );
}