import React from "react";
import { TiLocation } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdTimer } from "react-icons/md";

const ContactUs = () => {
    const contactData = [
        {
            id: 1,
            logo: <TiLocation />,
            title: "our Office address",
            desc: "Palm Court Bldg M, 5011B, 5th Floor, New Link Road,Beside Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064",
        },
        {
            id: 2,
            logo: <IoIosMail />,
            title: "General Enquiries",
            desc: "websupport@justdial.com",
        },
        { id: 3, logo: <IoCall />, title: "Call Us", desc: "+91-8888888888" },
        {
            id: 4,
            logo: <MdTimer />,
            title: "Our Timing",
            desc: "Mon - sun : 10:00 AM - 07:00 PM",
        },
    ];
    return (
        <div
            //  id="contact"
            className="w-full pt-20 pb-20 sm:pb-28 px-5"
        >
            <div className="max-w-[1300px] mx-auto">
                <h2 className="text-[32px] font-Hidayatullah text-center pb-14 capitalize">
                    Contact us
                </h2>
                <div className="map w-full mb-10 md:mb-20 rounded-md overflow-hidden">
                    <iframe
                        className="w-full h-[350px] md:h-[500px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7995413782855!2d101.7119999!3d3.14753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3720104618e9%3A0x61ffb5fdb1844d68!2sLazeez%20Arabic%20Restaurant%20and%20Grill!5e0!3m2!1sen!2sbd!4v1727791828294!5m2!1sen!2sbd"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex gap-10 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2">
                        <form className="flex flex-col gap-3 md:gap-5 ">
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-md font-JosefinSans_Regular capitalize"
                                type="text"
                                name=""
                                id=""
                                placeholder="Full name"
                            />
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-md font-JosefinSans_Regular capitalize"
                                type="number"
                                name=""
                                id=""
                                placeholder="Phone number"
                            />
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-md font-JosefinSans_Regular capitalize"
                                type="email"
                                name=""
                                id=""
                                placeholder="Email id"
                            />
                            <textarea
                                className="w-full h-[170px] md:h-[210] border-[1px] border-zinc-300 outline-none pl-4 pt-2 text-[20px] rounded-md font-JosefinSans_Regular capitalize"
                                placeholder="Message"
                            ></textarea>
                            <input
                                className="py-3 md:py-4 rounded-md border-[1px] bg-orangeShade-300 text-white text-[20px] transition-all duration-100 font-Nunito_Regular capitalize hover:text-white hover:hover:bg-greenShade-300 font-JosefinSans_Regular"
                                type="submit"
                                value="submit"
                            />
                        </form>
                    </div>
                    <div className="w-full flex pb-7 px-0 flex-col gap-12 mt-10 lg:mt-0 lg:w-1/2 lg:px-7">
                        {contactData.map((item) => {
                            return (
                                <div key={item.id} className="flex gap-4">
                                    <span className="text-4xl text-orangeShade-300">
                                        {item.logo}
                                    </span>
                                    <div className="flex flex-col">
                                        <h2 className="font-JosefinSans_bold text-[20px] uppercase pb-2 leading-none">
                                            {item.title}
                                        </h2>
                                        <p className=" font-JosefinSans_Regular text-[18px] capitalize leading-5 w-full sm:w-1/2 lg:w-full">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
