import React from "react";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// plugins
// import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const SignatureDishes = () => {
    const signatureData = [
        {
            id: 1,
            image: "/Lamb-Tagine-2.jpg",
            caption: "Lamb Tagine",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 2,
            image: "/lamb_shawarma.JPG",
            caption: "Lamb Shawarma",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 3,
            image: "/LargeMixedGrills.JPG",
            caption: "Large Mixed Grills",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 4,
            image: "/CupKunafa_chocolate1.jpg",
            caption: "CupKunafa Chocolate",
            styles: "col-span-2 md:col-span-2 lg:col-span-3",
        },
        {
            id: 5,
            image: "/Sandwich-shish-kebab.JPG",
            caption: "Sandwich Shish Kebab",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 6,
            image: "/Ghormah_sabsy.JPG",
            caption: "Ghormah Sabsy",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 7,
            image: "/OH5A4283.JPG",
            caption: "OH5A4283",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 8,
            image: "/sambussa.JPG",
            caption: "Sambussa",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 9,
            image: "/MandyLamb_.JPG",
            caption: "Mandy Lamb",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
        {
            id: 10,
            image: "/HaneedLamb.JPG",
            caption: "Haneed Lamb",
            styles: "col-span-2 md:col-span-2 lg:col-span-2",
        },
        {
            id: 11,
            image: "/sm_mix_appetizer.JPG",
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
            image: "/ShishTawook.JPG",
            caption: "Shish Tawook",
            styles: "col-span-2 md:col-span-2 lg:col-span-1",
        },
    ];
    return (
        <div id="signature_dishes" className="w-full px-5 pt-10 min-h-screen">
            <div className="h-full max-w-[1300px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Our Signature Dishes
                </h2>
                <div className="main h-full flex w-full">
                    <div className="w-full">
                        <LightGallery
                            zoomFromOrigin={false}
                            plugins={[lgZoom]}
                            mode="fade"
                            className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-2 grid-rows-auto"
                        >
                            {signatureData.map((item) => {
                                return (
                                    <a
                                        className={`${item.styles} h-52 w-full md:h-64 lg:h-80 rounded-3xl overflow-hidden border group`}
                                        href={item.image}
                                    >
                                        <img
                                            className="object-cover w-full h-full group-hover:scale-110 duration-200 transition-all  scale-100"
                                            alt={item.caption}
                                            src={item.image}
                                        />
                                    </a>
                                );
                            })}
                        </LightGallery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDishes;
