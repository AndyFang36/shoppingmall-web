import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/swiper-bundle.css"

export default function Carousel() {
    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navifation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </Box>
    );
}