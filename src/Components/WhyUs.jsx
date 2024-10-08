import React from "react";
import { SiCodefresh } from "react-icons/si";
import { FaShoppingBasket } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { PiMosqueFill } from "react-icons/pi";

const WhyUs = () => {
    const whyUsData = [
        { id: 1, image: <SiCodefresh />, title: "fresh food" },
        { id: 2, image: <FaShoppingBasket />, title: "easy to order" },
        { id: 3, image: <PiBowlFoodFill />, title: "appetizing taste" },
        { id: 4, image: <PiMosqueFill />, title: "authentic arabic cuisine" },
    ];
    return (
        <div className="w-full pt-10 pb-32 px-5">
            <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                why us?
            </h2>
            <div className="max-w-[1300px] mx-auto flex justify-between items-start flex-wrap gap-y-5 lg:flex-nowrap lg:gap-0 lg:w-full">
                {whyUsData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center p-5 gap-1 w-1/2 lg:w-1/4 ${
                                item.id == 0 && "border-l-[1px]"
                            }`}
                        >
                            <span className="text-6xl text-orangeShade-300 duration-150 transition-all hover:text-greenShade-300 cursor-pointer">
                                {item.image}
                            </span>
                            <h2 className="text-[17px] font-JosefinSans_semibold text-center sm:text-[25px]">
                                {item.title}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyUs;
