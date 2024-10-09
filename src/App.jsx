import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

const App = () => {
    const [popup, setpopup] = useState(false);

    return (
        <div className="">
            <Navbar />
            <HomePage popup={popup} setpopup={setpopup}  />
            <Footer setpopup={setpopup}  />
            <Loading />
        </div>
    );
};

export default App;
