import React from "react";

const Loading = () => {
    return (
        <>
            <div className="w-full h-screen fixed top-0 left-0 bg-green-900 z-[99999] animate-pulse">
                Loading
            </div>
            <div className="w-full h-screen fixed top-0 left-0 bg-orangeShade-300 z-[9999]">
                Loading
            </div>
        </>
    );
};

export default Loading;
