import React from "react";

// REACT SLIDER
import Slider from "react-slick";

// CARDS DETAILS
const TestimonialData = [
    {
        id: 1,
        name: "Simon Gomez",
        text: "Seeking a taste of tradition? 'Brewed Legacy' in the historic district has been serving up classic coffee blends for generations. Step back in time while savoring their rich, time-tested roasts and friendly neighborhood vibe.",
        img: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
        id: 2,
        name: "Anwar jibawi",
        text: "For the ultimate chill-out session, head to 'Bean Retreat' by the lakeside. With outdoor seating overlooking serene waters and a menu featuring cold brews and iced coffees, it's the ideal spot to unwind on a sunny afternoon.",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Anwar_Jibawi.png",
    },
    {
        id: 3,
        name: "Liana McConnell",
        text: "For a cozy ambiance and artisanal brews, try out 'Steamy Mornings' on Main Street. Their snug corner seats and rich, aromatic blends make it perfect for a quiet read or a catch-up with friends.",
        img: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        id: 4,
        name: "Skyler Marquez",
        text: "Craving something sweet alongside your caffeine fix? 'Mocha Haven' is your go-to spot. Indulge in their decadent selection of mochas and lattes, perfectly paired with their freshly baked pastries.",
        img: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
        id: 5,
        name: "Ashton Harvey",
        text: "Feeling adventurous? Swing by 'Espresso Expedition' tucked away in the city center. Their rotating selection of single-origin beans and skilled baristas promise an exciting coffee journey with every visit.",
        img: "https://randomuser.me/api/portraits/men/42.jpg",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* HEADER SECTION */}
                <div className="mb-10">
                    <h1 data-aos="fade-up" className="text-center text-4xl font-bold font-cursive" >
                        Testimonials
                    </h1>
                </div>

                {/* CARDS */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative" >
                                    <div className="mb-4">
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                    </div>
                                    {/* CARD CONTENT */}
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">
                                                {data.text}
                                            </p>
                                            <h1 className="text-xl font-bold text-black/80  font-cursive2">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
