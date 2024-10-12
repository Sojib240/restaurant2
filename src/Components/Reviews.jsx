import React from "react";
// Import Swiper React components
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
        <div className="w-full pt-[6%] pb-[10%] sm:pb-[8%] md:pt-[10%] md:pb-[8%] lg:pt-[4%] lg:pb-[4%] px-5 testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -bottom-[2px] -left-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -top-[1px]  -right-[2px] z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto flex items-center justify-center flex-wrap-reverse md:flex-nowrap gap-5 md:gap-20 py-10">
                <div className="w-full md:w-1/2">
                    <img
                        className="max-w-[1/2] mx-auto"
                        src="/desserts.png"
                        alt=""
                    />
                </div>
                <div className="slider w-full md:w-1/2">
                    <div className="max-w-[500px] md:max-w-[800px] w-full mx-auto bg-orangeShade-300 rounded-full flex justify-between items-center py-2 px-[5%] mt-[4%] mb-[1%] md:mb-[4%] lg:mb-0">
                        <a
                            className=" text-white text-xs lg:text-base rounded-full font-JosefinSans_Regular"
                            href=""
                        >
                            Write a Review
                        </a>
                        <div className="flex flex-col gap-1 sm:gap-0">
                            <p className="text-white text-xs lg:text-base font-JosefinSans_Regular leading-none">
                                Google Ratings
                            </p>
                            <div className="flex items-center">
                                <p className="text-white pr-3 text-xs lg:text-base font-JosefinSans_Regular leading-none">
                                    4.5
                                </p>
                                <div className="flex">
                                    <span className="text-white text-xs lg:text-base">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-base">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-base">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-base">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-base">
                                        <IoStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        loop
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper pb-[12%] sm:pb-[8%] pt-[7%] max-w-[500px] md:max-w-[100%]"
                    >
                        {reviewsData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move flex justify-center items-center"
                                >
                                    <div className="flex flex-col justify-center items-center text-center gap-3 w-full">
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
