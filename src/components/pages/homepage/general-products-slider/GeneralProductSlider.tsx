import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {topSelling} from "@/mock/TopSelling";
import {topRated} from "@/mock/TopRated";
import {recentlyAdded} from "@/mock/RecentlyAdded";
import {trendingProducts} from "@/mock/TrendingProducts";


export function GeneralProductSlider() {
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
                <ProductVerticalList title={"Top Selling"} data={topSelling}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={"Top Rated"} data={topRated}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={"Recently Added"} data={recentlyAdded}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList title={"Trending Products"} data={trendingProducts}/>
            </SwiperSlide>
        </Swiper>
    );
}