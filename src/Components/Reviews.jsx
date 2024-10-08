import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            logo: "/demoImg.jpg",
            title: "James F. Nowlin",
            desc: "Eveniet reprehenderit delectus possimus nemo placeat repudiandae deleniti debitis. Id in minus, temporibus voluptatum ullam",
        },
        {
            id: 2,
            logo: "/demoImg.jpg",
            title: "Mary J. Robards",
            desc: "impedit sequi excepturi, recusandae perspiciatis accusantium iure consequatur vitae quasi a, quisquam molestias pariatur aperiam vero. Natus, inventore officia a illum",
        },
        {
            id: 3,
            logo: "/demoImg.jpg",
            title: "Jose B. Massey",
            desc: "Incidunt iusto accusamus id repellat. Ab ad excepturi a reprehenderit autem ut maxime architecto perferendis culpa eligendi atque amet perspiciatis laboriosam ratione",
        },
        {
            id: 4,
            logo: "/demoImg.jpg",
            title: "Marcus T. Shepherd",
            desc: "est dolor cumque aperiam id repudiandae, ipsam reiciendis! Numquam, dolorum nulla. Doloribus exercitationem suscipit mollitia possimus modi molestiae reiciendis",
        },
        {
            id: 5,
            logo: "/demoImg.jpg",
            title: "Ulrich Eisenhauer",
            desc: "Consectetur harum cumque in similique rem, aperiam doloribus consequuntur autem est hic laudantium ab temporibus magni ullam maiores voluptatibus.",
        },
    ];
    return (
        <div className="w-full pt-[8%] pb-[10%] sm:pb-[8%] md:pt-[8%] md:pb-[8%] lg:pt-[6%] lg:pb-[6%] px-5 testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -bottom-[2px] -left-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -top-[1px]  -right-[2px] z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="max-w-[1800px] mx-auto flex items-center flex-wrap-reverse sm:flex-nowrap gap-5">
                <div className="w-full sm:w-[40%] md:w-[30%]">
                    <img className="w-full" src="/item2.webp" alt="" />
                </div>
                <div className="slider w-full sm:w-[60%] md:w-[70%]">
                    <Swiper
                        loop
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper pb-[7%] pt-[7%]"
                    >
                        {reviewsData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move flex justify-center items-center"
                                >
                                    <div className="flex flex-col justify-center items-start text-left gap-3 max-w-[520px] w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12">
                                                <img
                                                    className="w-full h-full rounded-full "
                                                    src={item.logo}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="">
                                                <h2 className="text-lg lg:text-[23px] font-JosefinSans_semibold text-white">
                                                    {item.title}
                                                </h2>
                                                <div className="flex">
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>

                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStarHalf />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[15px] lg:text-[18px] font-JosefinSans_Regular text-white leading-5">
                                            {item.desc}
                                        </p>
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

export default Reviews;
