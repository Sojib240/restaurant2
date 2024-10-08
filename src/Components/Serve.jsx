import React from "react";

const Serve = () => {
    const cardData = [
        {
            id: 1,
            image: "/sm_mix_appetizer.JPG",
            // image2: "/item2.webp",
            title: "starters",
            desc: "enjoy variety of lip smacking starters made by our skilled and expert chefs",
        },
        {
            id: 2,
            image: "/HaneedLamb.JPG",
            // image2: "/item3.webp",
            title: "main course",
            desc: "enjoy a wide range of delectable dishes cooked to perfection by our chefs",
        },
        {
            id: 3,
            image: "/CupKunafa_chocolate1.jpg",
            // image2: "/item4.webp",
            title: "desserts",
            desc: "surprise your taste buds with our delicious and authentic arabic desserts",
        },
        {
            id: 4,
            image: "/OH5A4283.JPG",
            // image2: "/item1.webp",
            title: "drinks",
            desc: "we serve a wide range of non-alcoholic drinks to satiate our patrons",
        },
    ];
    return (
        <div className="serve px-5 pb-20 pt-10 sm:pt-8 bg-opacity-0">
            <div className="mx-auto max-w-[1800px]">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    We Serve
                </h2>
                <div className="flex gap-0 flex-wrap sm:flex-wrap lg:flex-nowrap">
                    {cardData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="card group w-full pb-10 sm:w-1/2 sm:p-4 lg:w-1/4 lg:p-4"
                            >
                                <div className="image overflow-hidden rounded-tl-[50px] rounded-tr-[50px]  relative">
                                    <div className="bg1 w-[102%] absolute -bottom-[1px] -left-[2px] z-20">
                                        <img
                                            className="w-full"
                                            src="/wave3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        className="w-full[80%] group-hover:scale-110 duration-300 transition-all opacity-100 scale-100"
                                        src={item.image}
                                        alt=""
                                    />
                                    {/* <img
                                        className="opacity-0 scale-50 duration-500 transition-all w-full[80%] absolute top-0 left-0 bottom-0 right-0 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-6"
                                        // src={item.image2}
                                        alt=""
                                    /> */}
                                </div>
                                <h2 className="text-center text-[25px] mt-6 font-JosefinSans_semibold capitalize">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-center capitalize leading-6 pt-3 font-JosefinSans_Regular">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Serve;
