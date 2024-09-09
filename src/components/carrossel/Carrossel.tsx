import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";
import Slide01 from "./Slide01";

function Home() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Slide01 />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/vzr6ryejm/games/slide_03.jpg?updatedAt=1717248886808" 
                        alt="Carrossel - Slide 02" 
                    />
                </SwiperSlide>

                <SwiperSlide>
                <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/vzr6ryejm/games/slide_04.jpg?updatedAt=1717248886688" 
                    alt="Carrossel - Slide 03" 
                />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Home