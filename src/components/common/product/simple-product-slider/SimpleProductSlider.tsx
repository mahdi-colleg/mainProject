import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import { SimpleProductCard} from "@/components";

interface Props {
    sliderData: Array<any>,
    nextEl?: string,
    prevEl?: string,
}

export function SimpleProductSlider({sliderData, nextEl, prevEl}: Props) {
    return (
        <Swiper
            modules={[Navigation ,Autoplay]}
            breakpoints= {
                 {
                768: {
                slidesPerView: 3,
                spaceBetween: 18
            },
                1024: {
                slidesPerView: 4,
                spaceBetween: 22
            },
                1280: {
                slidesPerView: 5,
                spaceBetween: 24
            }
            }
            }
            navigation={{
                nextEl: nextEl,
                prevEl: prevEl,
            }}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
        >

            {
                sliderData.map((slideData, index) => {
                    return (
                        <>
                            <SwiperSlide key={index}>
                                <SimpleProductCard data={slideData}/>
                            </SwiperSlide>
                        </>
                    )
                })
            }
        </Swiper>
    );
}