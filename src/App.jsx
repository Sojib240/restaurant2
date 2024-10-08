import React, { useRef } from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

const App = () => {
    // const heroRef = useRef(null)

    return (
        <div className="">
            <Navbar />
            <HomePage />
            <Footer />
            {/* <Loading /> */}
        </div>
    );
};

export default App;
