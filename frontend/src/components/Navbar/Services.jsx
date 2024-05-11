import React from 'react'

// IMPORT IMAGE
import Img2 from "../../assets/coffee-white.png"

const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Espresso",
      description: "It is a concentrated form of coffee brewed with high pressure, hot water and finely ground coffee beans.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Americano",
      description: "It is just water and espresso.",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img2,
      name: "Cappuccino",
      description: "It is a popular coffee drink made from espresso, steamed milk, and milk foam.",
      aosDelay: "500",
    },
  ];

const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="py-10">
                <div className="container">
                    {/* HEADING SECTION  */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl font-bold font-cursive text-gray-800">
                            COFFEE FOR YOU
                        </h1>
                    </div>

                    {/* SERVICE CARD SECTION */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <div data-aos="fade-up" data-aos-delay={service.aosDelay} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]" >
                                {/* IMAGE */}
                                <div className="h-[122px]">
                                    <img src={service.img} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                </div>
                                
                                {/* TEXT */}
                                <div className="p-4 text-center">
                                    <div className="w-full "></div>
                                    <h1 className="text-xl font-bold">
                                        {service.name}
                                    </h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services