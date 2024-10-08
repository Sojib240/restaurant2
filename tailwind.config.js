/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                greenShade: {
                    100: "#13502D",
                    200: "#024E27",
                    300: "#134E13",
                },
                orangeShade: {
                    100: "#F58220",
                    200: "#F5892B",
                    300: "#f58f45",
                },
            },
            fontFamily: {
                Hidayatullah: ["Hidayatullah", "sans-serif"],
                JosefinSans_Regular: ["JosefinSans_Regular", "sans-serif"],
                JosefinSans_semibold: ["JosefinSans_semibold", "sans-serif"],
                JosefinSans_bold: ["JosefinSans_bold", "sans-serif"],
            },
        },
    },
    plugins: [],
};
