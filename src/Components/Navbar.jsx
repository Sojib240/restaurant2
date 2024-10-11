import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [navPosition, setnavPosition] = useState(false);
    window.addEventListener("scroll", (e) => {
        const currentScroll = window.scrollY;
        const heroHeight = document
            .querySelector(".hero")
            .getBoundingClientRect().height;

        if (currentScroll >= 300) {
            setnavPosition(true);
        }
        if (currentScroll < 300) {
            setnavPosition(false);
        }
    });
    const [first, setfirst] = useState(false);
    const menuRef = useRef();

    return (
        <>
            <header className="w-full relative">
                <div
                    className={`main-navbar w-full absolute top-0 left-0 z-[99] h-[70px] mt-3 flex items-center justify-center px-5`}
                >
                    <div className="max-w-[1820px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center 2xl:items-end w-full md:w-auto h-full">
                            <div className="logo w-32 sm:w-36 lg:w-36 pb-2">
                                <img
                                    className="w-full"
                                    src="/logo_name.png"
                                    alt=""
                                />
                            </div>
                            {first === false && (
                                <div
                                    onClick={() => setfirst(true)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden"
                                >
                                    <span className="text-lg text-greenShade-300">
                                        <RiMenu4Fill />
                                    </span>
                                </div>
                            )}
                            {first === true && (
                                <div
                                    onClick={() => setfirst(false)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden group"
                                >
                                    <span className="text-lg text-greenShade-300 group-hover:rotate-90 duration-150 transition-all">
                                        <MdClose />
                                    </span>
                                </div>
                            )}
                            <div className="main-nav-menu flex items-center gap-5 pt-3">
                                <a
                                    href="#home"
                                    to="#home"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg mix-blend-difference"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    About
                                </a>
                                <a
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                    href="https://lazeezarg.com/menu/"
                                >
                                    Menu
                                </a>
                                <a
                                    href="#signature_dishes"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    Must Try
                                </a>
                                <a className="link relative font-JosefinSans_semibold capitalize text-white text-lg cursor-pointer">
                                    Blog
                                </a>

                                <a
                                    href="#contact"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                {/*  */}
                <div
                    className={`fixed-navbar w-full h-[70px] px-5 py-2 bg-white ${
                        navPosition === true
                            ? "-translate-y-0"
                            : "-translate-y-[100%]"
                    } fixed top-0 left-0  z-[999] lg:px-12 transition-all duration-500 border-b-[1px] border-[#cfcfcf]`}
                >
                    <div className="max-w-[1800px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center w-full md:w-auto h-full">
                            <div className="logo w-32 sm:w-32 lg:w-32 pb-2">
                                <img
                                    className="w-full"
                                    src="/logo_name.png"
                                    alt=""
                                />
                            </div>
                            {first === false && (
                                <div
                                    onClick={() => setfirst(true)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden"
                                >
                                    <span className="text-lg text-greenShade-300">
                                        <RiMenu4Fill />
                                    </span>
                                </div>
                            )}
                            {first === true && (
                                <div
                                    onClick={() => setfirst(false)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden "
                                >
                                    <span className="text-lg text-greenShade-300 hover:rotate-90 duration-150 transition-all">
                                        <MdClose />
                                    </span>
                                </div>
                            )}
                            <div className="main-nav-menu flex items-center gap-5 pt-3">
                                <a
                                    href="#home"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    to="#about"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    About
                                </a>
                                <a
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                    href="https://lazeezarg.com/menu/"
                                >
                                    Menu
                                </a>
                                <a
                                    href="#signature_dishes"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Must Try
                                </a>
                                <a className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg cursor-pointer">
                                    Blog
                                </a>

                                <a
                                    href="#contact"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                {/*  */}
                <div
                    ref={menuRef}
                    className={`fixed top-[72px] left-1/2 -translate-x-1/2 w-full px-5 z-[999] mt-3 max-w-[1800px] mx-auto overflow-hidden transition-all duration-300 origin-top pb-5 ${
                        first === true
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-[10%]"
                    }
                    `}
                >
                    <div className="fixed-menu flex flex-col bg-white rounded-3xl border-[1px] border-[#cfcfcf] overflow-hidden">
                        <a
                            href="#home"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#cfcfcf] px-5 hover:bg-orangeShade-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#cfcfcf] px-5 hover:bg-orangeShade-300"
                        >
                            About
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#cfcfcf] px-5 hover:bg-orangeShade-300"
                            href="https://lazeezarg.com/menu/"
                        >
                            Menu
                        </a>
                        <a
                            href="#signature_dishes"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#cfcfcf] px-5 hover:bg-orangeShade-300"
                        >
                            Must Try
                        </a>
                        <a className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#cfcfcf] px-5 hover:bg-orangeShade-300">
                            Blog
                        </a>

                        <a
                            href="#contact"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-none px-5 hover:bg-orangeShade-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
