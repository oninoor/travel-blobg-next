import React from "react";
import Image from "next/image";

export default function EasyAndFast() {
  return (
    <div className="max-w-7xl mx-auto relative px-4">
      <div className="flex">
        <div className="w-6/12 pl-8 pr-20">
          <div className="flex flex-col mb-16">
            <h3 className="text-lg uppercase text-gray-500 mb-2">
              Easy and Fast
            </h3>
            <h3 className="text-5xl font-serif text-gray-900 leading-snug mb-10">
              Book your next trip in 3 easy steps
            </h3>

            <ul className="flex flex-col gap-y-10 pr-10">
              <li className="flex items-center ">
                <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12 material-icons">
                  navigation
                </span>
                <div className="flex flex-col ml-5 leading-5">
                  <h6 className="font-bold mb-1 text-gray-500">
                    Choose Destination
                  </h6>
                  <p className="font-normal text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center ">
                <span className="bg-accent-2 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12 material-icons">
                  account_balance_wallet
                </span>
                <div className="flex flex-col ml-5 leading-5">
                  <h6 className="font-bold mb-1 text-gray-500">Make Payment</h6>
                  <p className="font-normal text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center ">
                <span className="bg-accent-7 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12 material-icons">
                  local_taxi
                </span>
                <div className="flex flex-col ml-5 leading-5">
                  <h6 className="font-bold mb-1 text-gray-500">
                    Reach Airport on Selected Date
                  </h6>
                  <p className="font-normal text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5/12 flex justify-center items-center">
          {/* Card */}
          <div className="w-[370px] relative">
            {/* Decoration */}
            <div className="absolute w-60 h-60 rounded-full blur-3xl z-10 -top-10 -right-10 bg-accent-7/40"></div>

            {/* Mini Card */}
            <div className="absolute bottom-16 -right-24 transform translate-x1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7">
              <div className="flex">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                  <Image
                    layout="fill"
                    src="/images/travel-card-feed-2.png"
                    className="object-cover"
                    alt="Travel Ongoing Activity Destination"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ongoing</p>
                  <h5 className="text-lg text-gray-900 tracking-tight mb-3">
                    Trip to rome
                  </h5>
                  <p className="text-sm text-gray-900 mb-2">
                    <span className="text-accent-6">40%</span> completed
                  </p>
                  <span className="bg-gray-200 w-full h-1 rounded-full block">
                    <span className="bg-accent-6 w-3/4 h-1 rounded-full block"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Main Card */}
            <div className="w-full h-full bg-white rounded-3xl shadow-great z-20 relative px-6 py-6">
              <div className="h-40 overflow-hidden relative rounded-xl mb-6">
                <Image
                  layout="fill"
                  src="/images/travel-card-feed-1.png"
                  className="object-cover"
                  alt="Travel Ongoing Activity"
                />
              </div>
              <h5 className="text-lg text-gray-900 tracking-wide mb-3">
                Trip To Greece
              </h5>
              <p className="text-base text-gray-500 flex space-x-1 mb-5">
                14-29 June | by Robbin joseph
              </p>
              <div className="flex items-center space-x-4 mb-7">
                <div className="h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center">
                  <span className="material-icons text-base text-gray-500">
                    eco
                  </span>
                </div>
                <div className="h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center">
                  <span className="material-icons text-base text-gray-500">
                    map
                  </span>
                </div>
                <div className="h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center">
                  <span className="material-icons text-base text-gray-500 transform -rotate-45 -translate-y-[2px]">
                    send
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-base flex items-center">
                  <span className="material-icons text-base text-gray-500 mr-2">
                    home_work
                  </span>
                  24 people going
                </p>
                <span className="material-icons text-gray-500">
                  favorite_border
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
