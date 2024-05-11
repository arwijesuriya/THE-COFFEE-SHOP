import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const TheApp = () => {
    return (
        <>
            <div className="py-14" style={backgroundStyle}>
                <div className="container">
                    <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
                        <div data-aos="fade-up" data-aos-duration="300" className="space-y-6 max-w-xl mx-auto" >
                            {/* TEXT */}
                            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                                THE COFFEE SHOP is available for Android and IOS
                            </h1>
                            
                            {/* IMAGE */}
                            <div className="flex flex-wrap justify-center sm:justify-start items-center">
                                <a href="#">
                                    <img src={PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                                </a>
                                <a href="#">
                                    <img src={AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                                </a>
                            </div>
                        </div>
                        
                        {/* EMPTY DEV FOR SPACE SAVING */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TheApp