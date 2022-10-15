import React from "react";
import Image from "next/image";

import DecorPlus1 from "images/decor-plus-style-1.svg";

export default function Categories() {
  return (
    <>
      <div className="max-w-7xl mx-auto relative px-4">
        {/* Decoration */}
        <div className="absolute w-36 h-36 lg:-right-10 -top-10">
          <DecorPlus1 className="decor-plus-style-1" />
        </div>

        {/* Content */}
        <div className="text-center flex flex-col mb-16">
          <h3 className="uppercase text-lg mb-2 text-gray-500">CATEGORY</h3>
          <h3 className="font-serif text-5xl text-gray-900 leading-snug">
            We Offer Best Services
          </h3>
        </div>

        {/* Card Content */}
        <div className="flex text-gray-900">
          {/* Card 1 */}
          <div className="w-3/12 px-8">
            <div className="relative transition duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                  <Image
                    layout="fixed"
                    width={60}
                    height={60}
                    src={"/images/illustration-radar.png"}
                  />
                </div>
                <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 group-hover:bg-accent-5/40 transition-all duration-500 delay-150 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
              </div>
              <h4 className="text-xl mb-3">Calculated Weather</h4>
              <h5 className="px-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
              </h5>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="w-3/12 px-8">
            <div className="relative transition duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute transform -translate-x-1/2">
                  <Image
                    layout="fixed"
                    width={146}
                    height={133}
                    src={"/images/illustration-plane.png"}
                  />
                </div>
                <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 group-hover:bg-accent-5/40 transition-all duration-500 delay-150 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
              </div>
              <h4 className="text-xl mb-3">Best Flights</h4>
              <h5 className="px-8 mb-8">
                Engrossed listening. Park gate sell they west hard for the.
              </h5>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="w-3/12 px-8">
            <div className="relative transition duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-8 top-2">
                  <Image
                    layout="fixed"
                    width={40}
                    height={69}
                    src={"/images/illustration-mic.png"}
                  />
                </div>
                <div className="absolute top-10 left-3 transform -translate-x-1/2 bg-accent-4 group-hover:bg-accent-5/40 transition-all duration-500 delay-150 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
              </div>
              <h4 className="text-xl mb-3">Local Events</h4>
              <h5 className="px-8 mb-8">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </h5>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="w-3/12 px-8">
            <div className="relative transition duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
              <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
              <div className="relative mb-6 inline-flex h-28">
                <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-10 top-3">
                  <Image
                    layout="fixed"
                    width={50}
                    height={50}
                    src={"/images/illustration-settings.png"}
                  />
                </div>
                <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 group-hover:bg-accent-5/40 transition-all duration-500 delay-150 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
              </div>
              <h4 className="text-xl mb-3">Customization</h4>
              <h5 className="px-8 mb-8">
                We deliver outsourced aviation services for military customers
              </h5>
            </div>
          </div>
          {/* End Card 4 */}
        </div>
      </div>
    </>
  );
}
