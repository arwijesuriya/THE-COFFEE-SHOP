import React from 'react'

// IMPORT IMAGE
import HomeImg from "../../assets/coffee2.png"

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* TEXT CONTENT SECTION */}
                <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold" >
                        TODAY YOU WILL DO
                        <br/>
                        AMAZING THINGS
                        <br/>
                        BUT FIRST,
                        <br/>
                        <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive" >
                            COFFEE
                        </span>
                    </h1>
                    <div>
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            #TheCoffeeShop
                        </h4>
                    </div>
                </div>

                {/* IMAGE CONTENT SECTION */}
                <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 " >
                    <img src={HomeImg} className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home