import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const VideoGallery = () => {
    const videoGalleryData = [
        {
            id: 1,
            video: "https://www.youtube-nocookie.com/embed/W_vTE--1Ec0?si=jSPxZO_KjTmp7Txy&amp;start=1",
        },
        {
            id: 2,
            video: "https://www.youtube-nocookie.com/embed/W_vTE--1Ec0?si=jSPxZO_KjTmp7Txy&amp;start=1",
        },
        {
            id: 3,
            video: "https://www.youtube-nocookie.com/embed/W_vTE--1Ec0?si=jSPxZO_KjTmp7Txy&amp;start=1",
        },
        {
            id: 4,
            video: "https://www.youtube-nocookie.com/embed/W_vTE--1Ec0?si=jSPxZO_KjTmp7Txy&amp;start=1",
        },
        {
            id: 5,
            video: "https://www.youtube-nocookie.com/embed/W_vTE--1Ec0?si=jSPxZO_KjTmp7Txy&amp;start=1",
        },
    ];

    return (
        <div className="w-full px-6 py-5 sm:py-20">
            <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                Videos
            </h2>
            <div className="max-w-[1300px] mx-auto">
                <div className="slider mt-6 pb-5">
                    <Swiper
                        // loop
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {videoGalleryData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move"
                                >
                                    <div className="flex flex-col justify-center items-center text-center h-[380px]">
                                        <iframe
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                            className="w-full h-full rounded-md"
                                            src={item.video}
                                        ></iframe>
                                        {/* <video
                                            className="w-full h-full"
                                            autoPlay
                                            muted
                                            loop
                                            src={item.video}
                                        ></video> */}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
