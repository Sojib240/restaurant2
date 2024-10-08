import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";

const Facilities = ({ setpopup }) => {
    const facilitiesData = [
        { id: 1, icon: <MdDeliveryDining />, title: "Home Delivery" },
        { id: 2, icon: <FaShoppingBag />, title: "Take Away" },
        { id: 3, icon: <FaCreditCard />, title: "Ease of Payment" },
        { id: 4, icon: <GiPartyPopper />, title: "Party orders" },
    ];

    const handleClick = (index) => {
        if (index === 0) {
            setpopup(true);
        }
    };
    return (
        <div className=" Facilities py-10 sm:py-28 px-5 w-full relative">
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
                                <span
                                    onClick={() => handleClick(index)}
                                    className="p-7 rounded-2xl bg-greenShade-100 text-5xl text-white mb-4 duration-150 transition-all hover:bg-orangeShade-300 cursor-pointer"
                                >
                                    {item.icon}
                                </span>
                                <h2 className="text-[17px] font-JosefinSans_semibold text-center sm:text-[25px]">
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
