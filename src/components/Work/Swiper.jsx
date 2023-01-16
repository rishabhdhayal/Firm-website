import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { workdetail } from "../../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperstyle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swipercard() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {workdetail.map((work) => (
                    <div key={work.id} >
                        <SwiperSlide>
                            <div className="workcard">
                               <div className="workimg"> <img src={work.img} alt="" /></div>
                                <div className="worktext">
                                    <div className="worktitle">{work.title } </div>
                                    <p>{work.content}</p>
                                </div>
                            </div></SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
