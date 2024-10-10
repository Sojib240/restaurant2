import React from "react";

const Hero = ({ setpopup }) => {
  return (
    <div
      id="home"
      className="heroBg hero hero w-full px-1 sm:px-4 bg-greenShade-300 relative z-50 overflow-hidden h-full"
    >
      <div className="bg w-[101%] absolute -bottom-[1px] left-0 rotate-180 z-50">
        <img className="w-full" src="/wave2.svg" alt="" />
      </div>
      <div className="sm:py-20 hero-max max-w-[1800px] min-h-[100svh] md:min-h-[100vh] w-full h-full mx-auto relative flex justify-center   items-center">
        <div className="lamp w-[55px] sm:w-[70px] md:w-[80px]  absolute top-0 right-0 h-auto z-10">
          <img className="w-full" src="/lamp.png" alt="" />
        </div>
        <div className=" flex flex-wrap gap-6 lg:gap-0 items-center z-40">
          <div className="order-2 lg:order-1 text-left w-full lg:w-2/3 xl:w-1/2 flex flex-col justify-start items-left gap-3 md:gap-6 relative">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="hero-text font-Love_Craft text-xl sm:text-2xl md:text-3xl lg:text-[36px] lg:leading-[60px] lg:text-left 2xl:text-[60px] 2xl:leading-[90px] text-white md:mb-3 text-center">
                Indulge in the Authenticity of Arabic Cuisines, where {"Lazeez"}
                is your culinary Expression!
              </h2>
            </div>
            <div className="flex gap-2 md:gap-3 justify-center lg:justify-start flex-wrap">
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
          <div className="order-1 lg:order-2 lg:w-1/3 xl:w-1/2 w-full flex items-center justify-center">
            <img
              src={"/banner.png"}
              className="w-1/2 lg:w-fit xl:w-2/3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
