import React from "react";
// lightbox
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

const SignatureDishes = () => {
    const signatureData = [
        {
            id: 1,
            image: "/Lamb-Tagine-2.jpg",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 2,
            image: "/lamb_shawarma.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 3,
            image: "/LargeMixedGrills.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 4,
            image: "/CupKunafa_chocolate1.jpg",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-3",
        },
        {
            id: 5,
            image: "/Sandwich-shish-kebab.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 6,
            image: "/Ghormah_sabsy.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 7,
            image: "/OH5A4283.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 8,
            image: "/sambussa.JPG",
            caption: "cap1",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 9,
            image: "/MandyLamb_.JPG",
            caption: "cap2",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 10,
            image: "/HaneedLamb.JPG",
            caption: "cap3",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 11,
            image: "/sm_mix_appetizer.JPG",
            caption: "cap4",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 12,
            image: "/waffle with ice cream.jpg",
            caption: "cap5",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 13,
            image: "/ShishTawook.JPG",
            caption: "cap5",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
    ];
    return (
        <div
            id="signature_dishes"
            className="w-full px-5 py-10 min-h-screen"
        >
            <div className="h-full max-w-[1300px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Our Signature Dishes
                </h2>
                <div className="main h-full flex w-full">
                    <div className="w-full">
                        <SlideshowLightbox
                            backgroundColor="rgba(0, 0, 0, 0.8)"
                            iconColor={"white"}
                            thumbnailBorder="red"
                            imgAnimation="fade"
                            modalClose="clickOutside"
                            className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-2 grid-rows-auto"
                        >
                            {signatureData.map((item) => {
                                return (
                                    <img
                                        key={item.id}
                                        className={`${item.styles} h-52 w-full md:h-64 lg:h-80 rounded-3xl overflow-hidden group object-cover border `}
                                        src={item.image}
                                        alt="lorem10"
                                    />
                                );
                            })}
                        </SlideshowLightbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDishes;
