import React from "react";

const Hero = ({ setpopup }) => {
    return (
        <div
            id="home"
            className="heroBg hero hero w-full px-5 bg-greenShade-300 relative z-50 overflow-hidden"
        >
            {/* <div className="w-[50%] absolute right-0 bottom-0 h-auto">
                <img className="w-full" src="/Group 1.svg" alt="" />
            </div> */}

            <div className="bg w-[101%] absolute -bottom-[1px] left-0 rotate-180">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="hero-max max-w-[1800px] pt-[280px] md:pt-[360px] pb-16 md:pb-28 lg:pb-36 mx-auto relative">
                <div className="lamp w-[55px] sm:w-[70px] md:w-[80px] lg:w-[108px] absolute top-0 left-0 z-50 h-auto">
                    <img className="w-full" src="/lamp.png" alt="" />
                </div>
                <div className="flex">
                    <div className=" text-left w-full flex flex-col justify-start items-left gap-3 md:gap-6 relative">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h2 className="hero-text max-w-[500px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] text-[30px] leading-[40px] md:leading-[65px] lg:leading-[80px] font-Hidayatullah text-white md:text-[40px] lg:text-[50px] text-center md:text-left pb-4 sm:pb-4 lg:pb-5">
                                Indulge in the Authenticity of Arabic Cuisines,
                                where 'Lazeez' is your culinary Expression!
                            </h2>
                        </div>
                        <div className="flex gap-2 md:gap-3 justify-center md:justify-start flex-wrap">
                            <button
                                onClick={() => setpopup(true)}
                                className="btn text-white bg-orangeShade-300 rounded-full  capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular px-6 py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 text-[15px] md:text-lg lg:text-xl"
                            >
                                order online
                            </button>
                            <a
                                href="https://lazeezarg.com/menu/"
                                className="btn text-white bg-orangeShade-300 rounded-full  capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular  px-6 py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 text-[15px] md:text-lg lg:text-xl"
                            >
                                Menu
                            </a>
                            <a
                                href="whatsapp:contact=015555555555@s.whatsapp.com&message='Wanting to book a table'"
                                className="btn text-white bg-orangeShade-300 rounded-full  capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular  px-6 py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 text-[15px] md:text-lg lg:text-xl"
                            >
                                book a table
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
