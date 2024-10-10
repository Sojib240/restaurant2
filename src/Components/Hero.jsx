import React from "react";

const Hero = ({ setpopup }) => {
    return (
        <div
            id="home"
            className="heroBg hero hero w-full px-5 bg-greenShade-300 relative z-50 overflow-hidden h-full"
        >
            <div className="bg w-[101%] absolute -bottom-[1px] left-0 rotate-180 z-50">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            {/* pt-[280px] md:pt-[360px] pb-16 md:pb-28 lg:pb-36 */}
            <div className="hero-max max-w-[1800px] min-h-[100svh] 2xl:min-h-[100vh] w-full h-full mx-auto relative flex justify-center md:justify-start items-end">
                <div className="lamp w-[55px] sm:w-[70px] md:w-[80px] lg:w-[108px] absolute top-0 left-0 h-auto z-10">
                    <img className="w-full" src="/lamp.png" alt="" />
                </div>
                <div className="flex pb-[20%] md:pb-[12%] lg:pb-[8%] z-40">
                    <div className=" text-left w-full flex flex-col justify-start items-left gap-3 md:gap-6 relative">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h2 className="hero-text font-Love_Craft text-white max-w-[100%] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[68px] 2xl:leading-[75px] text-center md:text-left pb-3 md:pb-0">
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
