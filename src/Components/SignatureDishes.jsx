import React, { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const SignatureDishes = () => {
    const signatureData = [
        {
            id: 1,
            image: "/Lamb-Tagine.jpg",
            caption: "Lamb Tagine",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 2,
            image: "/lamb_shawarma.jpg",
            caption: "Lamb Shawarma",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
            // ===========++++++++++++++++
        },
        {
            id: 3,
            image: "/LargeMixedGrills.jpg",
            caption: "Large Mixed Grills",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 4,
            image: "/CupKunafa_chocolate1.jpg",
            caption: "CupKunafa Chocolate",
            styles: "col-span-2 md:col-span-2 lg:col-span-3",
            // ===========++++++++++++
        },
        {
            id: 5,
            image: "/Sandwich-shish-kebab.jpg",
            caption: "Sandwich Shish Kebab",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
            // =============
        },
        {
            id: 6,
            image: "/Ghormah_sabsy.jpg",
            caption: "Ghormah Sabsy",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 7,
            image: "/avocado-milkshake.jpg",
            caption: "Avocado Milkshake",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
            // ====================
        },
        {
            id: 8,
            image: "/sambussa.jpg",
            caption: "Sambussa",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 9,
            image: "/MandyLamb_.jpg",
            caption: "Mandy Lamb",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 10,
            image: "/HaneedLamb.jpg",
            caption: "Haneed Lamb",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 11,
            image: "/sm_mix_appetizer.jpg",
            caption: "Sm Mix Appetizer",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 12,
            image: "/waffle with ice cream.jpg",
            caption: "Waffle With Ice Cream",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 13,
            image: "/ShishTawook.jpg",
            caption: "Shish Tawook",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
    ];
    return (
        <div id="signature_dishes" className="w-full px-5 pt-10 min-h-screen">
            <div className="h-full max-w-[1300px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-greenShade-300 text-center pb-14 capitalize">
                    Our Signature Dishes
                </h2>
                <div className="main h-full flex w-full">
                    <div className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-2 grid-rows-auto">
                        <Gallery withCaption>
                            {signatureData.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className={`${item.styles} h-52 w-full md:h-64 lg:h-80 rounded-3xl overflow-hidden border cursor-pointer`}
                                    >
                                        <Item
                                            className="w-full object-cover mix-blend-difference"
                                            original={item.image}
                                            thumbnail={item.image}
                                            width="1200"
                                            height="800"
                                            caption={`${item.caption}`}
                                        >
                                            {({ ref, open }) => (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    ref={ref}
                                                    onClick={open}
                                                    src={item.image}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                );
                            })}
                            {/*  */}
                        </Gallery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDishes;
