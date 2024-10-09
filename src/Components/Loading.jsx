import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <>
            <motion.div
                initial={{ top: "0", visibility: "visiable" }}
                animate={{ top: "-100%", visibility: "hidden" }}
                transition={{ delay: 4, duration: 0.4, ease: "linear" }}
                className="load w-full h-screen fixed top-0 left-0 bg-greenShade-300 z-[9999] flex items-center justify-center"
            >
                <span className="text-[15vw] capitalize text-white font-Hidayatullah">
                    Lazeez
                </span>
            </motion.div>
            <motion.div
                initial={{ visibility: "visiable", opacity: 1 }}
                animate={{ visibility: "hidden", opacity: 0 }}
                transition={{ delay: 4.2, duration: 0.4, ease: "linear" }}
                className="w-full h-screen fixed top-0 left-0 bg-white z-[999] flex items-center justify-center"
            ></motion.div>
        </>
    );
};

export default Loading;
