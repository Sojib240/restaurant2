import React, { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

const App = () => {
    const [popup, setpopup] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden";
        setTimeout(() => {
            document.querySelector("body").style.overflow = "auto";
        }, 4250);
    }, []);

    return (
        <>
            <Navbar />
            <HomePage popup={popup} setpopup={setpopup} />
            <Footer setpopup={setpopup} />
            <Loading loading={loading} setloading={setloading} />
        </>
    );
};

export default App;
