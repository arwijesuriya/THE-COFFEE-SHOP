import React from 'react'

// IMPORT THE LOGO
import Logo from "../../assets/website/coffee_logo.png";

// IMPORT ICONS
import { FaCoffee } from "react-icons/fa";

// NAVIGATION ITEMS
const Menu = [
    {
      id: 1,
      name: "HOME",
      link: "/#",
    },
    {
      id: 2,
      name: "PRODUCTS",
      link: "/#services",
    },
    {
      id: 3,
      name: "ABOUT",
      link: "/#about",
    },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
            <div className="flex justify-between items-center gap-4">
                {/* LOGO SECTION */}
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
                        <img src={Logo} alt="" className="w-14" />
                        THE COFFEE SHOP
                    </a>
                </div>

                {/* LINK SECTION */}
                <div className="flex justify-between items-center gap-4">
                    {/* NAVIGATION ITEMS */}
                    <ul className="hidden sm:flex items-center gap-4">
                        {Menu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link} className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200" >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CORNER BUTTON */}
                    <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                        ORDERS
                        <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar