import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="background bg-contain bg-repeat bg-center w-full pt-20 pb-16 sm:py-32 px-5 flex items-center bg-greenShade-300 relative overflow-hidden"
        >
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="bg1 w-[101%] absolute -bottom-[1px] -left-[2px] z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>

            <div className="w-[55px] sm:w-[70px] md:w-[80px] lg:w-[80px] absolute top-3 lg:top-10 right-0 h-auto z-20 mr-[2%]">
                <img className="w-full" src="/lamp.png" alt="" />
            </div>
            <div className=" max-w-[1800px] mx-auto flex justify-between items-center gap-5 sm:gap-12 flex-wrap lg:flex-nowrap z-30">
                <div className="w-full lg:w-2/3">
                    <h2 className="text-white text-[45px] font-Hidayatullah pb-6 text-center">
                        About us
                    </h2>
                    
                    <p className="text-white text-base sm:text-lg font-JosefinSans_Regular text-center pt-2">
                        Lazeez Arabic Restaurant and Grill is a premium Middle
                        Eastern dining destination located in the heart of Bukit
                        Bintang, Kuala Lumpur.
                        <br /> We offer an authentic array of Arabic cuisine,
                        with a menu that features traditional dishes, from
                        succulent grilled kebabs to flavorful shawarma and
                        fragrant biryanis. Whether you’re in the mood for a
                        casual lunch, a festive dinner, or a special gathering
                        with friends and family, Lazeez provides a warm and
                        inviting atmosphere that brings the rich culinary
                        traditions of the Middle East to Malaysia.
                        <br />
                        Join us for a memorable dining experience and savor the
                        true essence of Arabic flavors right here
                        in Kuala Lumpur!!
                    </p>
                    
                </div>
                <div className="w-full lg:w-1/3">
                    <img className="w-1/2 mx-auto" src="/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
