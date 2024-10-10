// import React from "react";
import React, { Suspense, lazy } from "react";
import Hero from "../Components/Hero";
import Serve from "../Components/Serve";
import Facilities from "../Components/Facilities";
import About from "../Components/About";
import WhyUs from "../Components/WhyUs";
import VideoGallery from "../Components/VideoGallery";
import ContactUs from "../Components/ContactUs";
// import SignatureDishes from "../Components/SignatureDishes";
import Reviews from "../Components/Reviews";
import PopUp from "../Components/PopUp";
import NumberOfItems from "../Components/NumberOfItems";

const SignatureDishes = lazy(() => import("../Components/SignatureDishes"));

const HomePage = ({ popup, setpopup }) => {
    return (
        <div className="w-full h-full">
            <Hero setpopup={setpopup} />
            <Serve />
            <Facilities setpopup={setpopup} />
            <About />
            <Suspense fallback={<div>Loading...</div>}>
                <SignatureDishes />
            </Suspense>
            <NumberOfItems />
            <Reviews />
            <WhyUs />
            <VideoGallery />
            <ContactUs />
            <PopUp popup={popup} setpopup={setpopup} />
        </div>
    );
};

export default HomePage;
