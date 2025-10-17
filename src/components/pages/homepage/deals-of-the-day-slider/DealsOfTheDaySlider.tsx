import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard, SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    sliderData: Array<EntityType<ProductType>>
}

export function DealsOfTheDaySlider({sliderData}: Props) {
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
                        spaceBetween: 22
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

            {
                sliderData.map((slideData, index) => {
                    return (
                        <SwiperSlide key={index} className="h-full">
                            <ProductDealsCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}