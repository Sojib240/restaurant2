import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

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
    // const navopen = () => {};

    return (
        <>
            <header className="w-full relative">
                <div
                    className={`main-navbar w-full absolute top-0 left-0 z-[99] h-24 mt-3 flex items-center justify-center px-5`}
                >
                    <div className="max-w-[1820px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center w-full md:w-auto h-full">
                            <div className="logo w-40 sm:w-40 lg:w-40 pb-2">
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
                                <Link
                                    // to="#home"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    Home
                                </Link>
                                <Link
                                    // to="#about"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    About
                                </Link>
                                <a
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                    href="https://lazeezarg.com/menu/"
                                >
                                    Menu
                                </a>
                                <Link
                                    // to="#signature_dishes"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    Must Try
                                </Link>
                                <a
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                    href=""
                                >
                                    Blog
                                </a>

                                <Link
                                    // to="#contact"
                                    className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                {/*  */}
                <div
                    className={`fixed-navbar w-full px-5 py-2 bg-white ${
                        navPosition === true
                            ? "-translate-y-0"
                            : "-translate-y-[100%]"
                    } fixed top-0 left-0  z-[999] lg:px-12 transition-all duration-500 `}
                >
                    <div className="max-w-[1800px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center w-full md:w-auto h-full">
                            <div className="logo w-40 sm:w-40 lg:w-40 pb-2">
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
                                <Link
                                    // to="#home"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Home
                                </Link>
                                <Link
                                    // to="#about"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    About
                                </Link>
                                <a
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                    href="https://lazeezarg.com/menu/"
                                >
                                    Menu
                                </a>
                                <Link
                                    // to="#signature_dishes"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Must Try
                                </Link>
                                <a
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                    href=""
                                >
                                    Blog
                                </a>

                                <Link
                                    // to="#contact"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                {/*  */}
                <div
                    ref={menuRef}
                    className={`fixed top-24 left-1/2 -translate-x-1/2 w-full px-5 z-[999] mt-3 max-w-[1800px] mx-auto overflow-hidden transition-all duration-300 origin-top pb-5 ${
                        first === true
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-[10%]"
                    }
                    `}
                >
                    <div className="fixed-menu flex flex-col bg-white rounded-3xl border-2 overflow-hidden">
                        <Link
                            // to="#home"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] px-5 hover:bg-orangeShade-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="#about"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] px-5 hover:bg-orangeShade-300"
                            href=""
                        >
                            About
                        </Link>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] px-5 hover:bg-orangeShade-300"
                            href="https://lazeezarg.com/menu/"
                        >
                            Menu
                        </a>
                        <Link
                            // to="#signature_dishes"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] px-5 hover:bg-orangeShade-300"
                            href=""
                        >
                            Must Try
                        </Link>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] px-5 hover:bg-orangeShade-300"
                            href=""
                        >
                            Blog
                        </a>

                        <Link
                            // to="#contact"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-none px-5 hover:bg-orangeShade-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
