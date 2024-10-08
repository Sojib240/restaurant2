import React from "react";

const NumberOfItems = () => {
    const itemData = [
        { title: "96", desc: "Dishes Available" },
        { title: "26", desc: "Dessert & Drinks" },
        { title: "2", desc: "Locations" },
        { title: `${999}+`, desc: "Happy Customers" },
    ];
    return (
        <div className="w-full pt-32 pb-20">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex flex-col">
                    <div className="w-full max-w-[600px] mx-auto">
                        <h2 className="text-[35px] font-Hidayatullah text-center pb-6 capitalize">
                            Number of items
                        </h2>
                        <p className="font-JosefinSans_Regular text-lg leading-5 text-center">
                            We lead the group by consistently emphasizing
                            delicious, high-quality food that provides a warm
                            and welcoming environment.
                        </p>
                    </div>
                    <div className="flex gap-5 mt-10">
                        {itemData.map((item) => {
                            return (
                                <div className="card w-1/4 bg-greenShade-300 py-5 px-3 rounded-3xl">
                                    <h2 className="font-JosefinSans_bold text-[60px] text-center text-white leading-[100%]">
                                        {item.title}
                                    </h2>
                                    <p className="font-JosefinSans_Regular text-lg text-center text-white">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberOfItems;
