import React from "react";

// REACT ICONS
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

// IMPORT IMAGES
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};
const Footer = () => {
    return (
        <div style={bgImage} className=" text-white">
            <div className="bg-black/40 min-h-[400px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive" >
                            THE COFFEE SHOP
                        </a>
                        <p className="  pt-4">
                            &copy; Developed By <a href="https://github.com/arwijesuriya/THE-COFFEE-SHOP.git" target="_blank">Achira Wijesuriya</a> | All Rights Reserved
                        </p>
                    </div>

                    {/* Footer links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">
                                Navigator
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block hover:scale-105 duration-200" >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* second col links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">
                                Address:
                            </h1>
                            <p className="mb-3">
                                THE COFFEE SHOP,
                                <br />
                                12/15,
                                <br />
                                Highlevel Rd,
                                <br />
                                Nugegoda,
                                <br />
                                Sri Lanka.
                            </p>
                        </div>

                        {/* Company Address */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">
                                Contacts:
                            </h1>
                            <div>
                                <p>+94 123456789</p>

                                {/* social links */}
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="https://www.instagram.com/arwijesuriya58/" target="_blank">
                                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="https://www.facebook.com/arwijesuriya58" target="_blank">
                                        <FaFacebook className="text-3xl hover:text-primary duration-200" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/arwijesuriya58/" target="_blank">
                                        <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
