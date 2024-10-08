import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full bg-greenShade-300 px-6 pt-32 pb-8 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto">
                <div className="w-full flex justify-between gap-10 flex-wrap lg:flex-nowrap lg:gap-0">
                    <div className="flex gap-10 flex-wrap lg:flex-nowrap lg:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                USEFUL LINKS
                            </h2>
                            <div className="">
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    privacy polict
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    order online
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    we serve
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    about us
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                HOME
                            </h2>
                            <div className="">
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    book a table
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    facilities
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    why us{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 flex-wrap lg:flex-nowrap lg:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold text-white uppercase">
                                CONTACT
                            </h2>
                            <div className="">
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    Palm Court Bldg M, 5011B, 5th Floor, New
                                    <br />
                                    Link Road, Beside Goregaon Sports <br />
                                    Complex Malad West, Mumbai. <br /> 400064,
                                    Maharashtra
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    +91-8888888888
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize">
                                    websupport@justdial.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                CONNECT
                            </h2>
                            <div className="flex gap-3">
                                <span className="text-white text-2xl">
                                    <FaSquareFacebook />
                                </span>
                                <span className="text-white text-2xl">
                                    <IoLogoLinkedin />
                                </span>
                                <span className="text-white text-2xl">
                                    <FaInstagramSquare />
                                </span>
                                <span className="text-white text-2xl">
                                    <FaSquareXTwitter />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <h2 className="font-JosefinSans_Regular text-zinc-200 text-base text-center pt-10 lg:text-lg lg:pt-20 lg:text-left">
                    @ Copyrights 2020 - 2021 Arab Nation. All Rights Reserved.
                </h2>
            </div>
        </div>
    );
};

export default Footer;
