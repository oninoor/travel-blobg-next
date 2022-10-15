import React from "react";
import Image from "next/image";

import DecoreSpiral from "images/decore-spiral.svg";

export default function Destinations() {
  return (
    <div className="max-w-7xl mx-auto relative px-4">
      {/* Content */}
      <div className="text-center flex flex-col mb-16">
        <h3 className="text-lg uppercase text-gray-500 mb-2">Top Selling</h3>
        <h3 className="text-5xl font-serif text-gray-900 leading-snug">
          Top Destinations
        </h3>
      </div>

      {/* Card */}
      <div className="flex text-gray-900 relative px-10">
        {/* Decoration */}
        <div className="absolute h-64 w-24 right-0 bottom-10">
          <DecoreSpiral className="stroke-gray-400" />
        </div>

        {/* Card 1 */}
        <div className="w-4/12 px-6 relative z-20">
          <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
            <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative h-[457px]">
              <Image
                layout="fill"
                quality={80}
                src="/images/travel-destination-2.jpg"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white pt-6 px-6">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="text-lg text-gray-500">Rome, Italy</h4>
                  <h4 className="text-lg text-gray-500">$5,42k</h4>
                </div>
                <h4 className="flex items-center text-gray-500 text-base">
                  <span className="material-icons mr-2 text-gray-900">
                    near_me
                  </span>{" "}
                  10 Days Trip
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* End Card 1 */}

        {/* Card 2 */}
        <div className="w-4/12 px-6 relative z-20">
          <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
            <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative h-[457px]">
              <Image
                layout="fill"
                quality={80}
                src="/images/travel-destination-1.jpg"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white pt-6 px-6">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="text-lg text-gray-500">London, UK</h4>
                  <h4 className="text-lg text-gray-500">$4.2k</h4>
                </div>
                <h4 className="flex items-center text-gray-500 text-base">
                  <span className="material-icons mr-2 text-gray-900">
                    near_me
                  </span>{" "}
                  12 Days Trip
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* End Card 2 */}

        {/* Card 3 */}
        <div className="w-4/12 px-6 relative z-20">
          <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
            <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden relative h-[457px]">
              <Image
                layout="fill"
                quality={80}
                src="/images/travel-destination-3.jpg"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white pt-6 px-6">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="text-lg text-gray-500">Full Europe</h4>
                  <h4 className="text-lg text-gray-500">$15k</h4>
                </div>
                <h4 className="flex items-center text-gray-500 text-base">
                  <span className="material-icons mr-2 text-gray-900">
                    near_me
                  </span>{" "}
                  28 Days Trip
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* End Card 3 */}
      </div>
    </div>
  );
}
