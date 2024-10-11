import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";

const Facilities = ({ setpopup }) => {
    const facilitiesData = [
        { id: 1, icon: "/express-delivery.png", title: "Home Delivery" },
        { id: 2, icon: "/table.png", title: "outdoor seating" },
        { id: 3, icon: "/pray.png", title: "prayer facility" },
        { id: 4, icon: "/balloon.png", title: " event hosting" },
    ];

    const handleClick = (index) => {
        if (index === 0) {
            setpopup(true);
        }
    };
    return (
        <div
            id="facilities"
            className=" Facilities py-10 sm:py-28 px-5 w-full relative"
        >
            <div className="w-full">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Facilities
                </h2>
                <div className="max-w-[1300px] mx-auto flex justify-between items-start flex-wrap gap-y-5 lg:flex-nowrap lg:gap-0 lg:w-full">
                    {facilitiesData.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center p-5 gap-1 w-1/2 lg:w-1/4"
                            >
                                <img
                                    onClick={() => handleClick(index)}
                                    className="p-7 rounded-2xl bg-greenShade-100 text-5xl text-white mb-4 duration-150 transition-all hover:bg-orangeShade-300 cursor-pointer"
                                    src={item.icon}
                                    alt=""
                                />
                                <h2 className="text-[17px] font-JosefinSans_semibold text-center sm:text-[25px] capitalize">
                                    {item.title}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
