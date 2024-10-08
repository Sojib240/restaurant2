import React from "react";
import { MdClose } from "react-icons/md";

const PopUp = ({ popup, setpopup }) => {
    return (
        <div
            className={`popup1 fixed top-0 left-0 w-full h-screen z-[9999] bg-black flex justify-center items-center px-5 ${
                popup === true ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div className="popup-card w-[500px] rounded-[30px] bg-white p-5 relative">
                <span
                    onClick={() => setpopup(false)}
                    className="w-[30px] h-[30px] bg-greenShade-300 rounded-full flex justify-center items-center text-white absolute top-0 right-0 m-5 cursor-pointer"
                >
                    <MdClose />
                </span>
                <div className="logo w-40 mx-auto">
                    <img className="w-full" src="/logo.png" alt="" />
                </div>
                <div className="w-full flex items-end justify-end gap-3 flex-col mt-5">
                    <a
                        href="https://food.grab.com/my/en/restaurant/lazeez-arabic-restaurant-and-grill-bukit-bintang-delivery/1-C3LANN43AKMTWE"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95% overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img className="w-full" src="/grab.svg" alt="" />
                        </span>
                        <span className="w-full text-center">Grab</span>
                    </a>
                    <a
                        href="https://www.foodpanda.my/restaurant/kd3b/lazeez-arabic-restaurant-and-grill"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95%  overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img
                                className="w-full"
                                src="/foodpanda.svg"
                                alt=""
                            />
                        </span>
                        <span className="w-full text-center">Foodpanda</span>
                    </a>
                    <a
                        href="https://www.foodpanda.my/restaurant/kd3b/lazeez-arabic-restaurant-and-grill"
                        className="flex justify-between items-center w-full bg-gradient-to-r from-[#e4d6c8] from-10% via-[#e7b894] via-60% to-[#64c484] to-95%  overflow-hidden px-3 rounded-xl h-12 font-JosefinSans_semibold relative"
                    >
                        <span className="w-9 h-9 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <img className="w-full" src="/beep.svg" alt="" />
                        </span>
                        <span className="w-full text-center">Beep</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
