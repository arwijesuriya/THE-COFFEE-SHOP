import React from 'react'

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

// IMPORT IMAGE
import BannerImg from "../../assets/coffee-white.png"
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
    return (
        <>
            <span id="about"></span>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* IMAGE */}
                            <div data-aos="zoom-in">
                                <img src={BannerImg} alt="" className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin" />
                            </div>

                            {/* TEXT */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive" >
                                    Premium Blend Coffee
                                </h1>
                                <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5 text-justify" >
                                    PREMIUM means that we source the best beans from well managed coffee plantations. 
                                    Our 'Premium Blends' are made from the world's very finest Arabica beans (Our premium blend 'Classic' contains some best sourced Robusta beans as well). 
                                    At the end of the day coffee is only as good as the farm that plants and harvests it.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    {/* FOOD TAGS */}
                                    <div className="space-y-5">
                                        <div data-aos="fade-up" className="flex items-center gap-3">
                                            <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                                            <span>Premium Coffee</span>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3" >
                                            <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                                            <span>Fast Food Coffee</span>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-3" >
                                            <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                            <span>Coffee Food Trucks</span>
                                        </div>
                                    </div>
                                    <div data-aos="slide-left" className="border-l-4 border-primary/50 pl-6 space-y-2" >
                                        <h1 className="text-2xl font-semibold font-cursive ">
                                            Coffee Lover
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Coffee is the common man's gold, and like gold, it brings to every person the feeling of luxury and nobility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Banner