import React from "react";
import Link from "next/link";
import Image from "next/image";

import UnderlineDecore from "images/text-decore-hero.svg";
import DecoreIntersect from "images/decor-intersect-1.svg";

export default function Hero() {
  return (
    <>
      {/* Ornament Kanan */}
      <span className="absolute w-5/12 h-screen right-0 top-0">
        <DecoreIntersect className="fill-accent-4" />
      </span>

      {/* Ornament Kiri */}
      <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          {/* Col Kiri */}
          <div className="w-6/12 pt-52">
            <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
              Best Destinations around the world
            </h1>
            <h2 className="textgray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
              Travel,{" "}
              <span className="relative">
                enjoy{" "}
                <span className="absolute left-0 top-full -mt-8 -ml-4 -z-10">
                  <UnderlineDecore className="w-[385px] h-[12px] fill-accent-2" />
                </span>
              </span>{" "}
              and live a new and full life
            </h2>
            <p className="text-gray-500 max-w-lg leading-8 mb-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex">
              <Link href="/">
                <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] text-white px-6 py-4 rounded-xl">
                  Find Out More
                </a>
              </Link>

              <button className="flex items-center">
                <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                  <span className="material-icons">play_arrow</span>
                </span>
                <span className="text-gray-500">Play Demo</span>
              </button>
            </div>
          </div>

          {/* Col Kanan */}
          <div className="w-6/12 pt-24 relative">
            <div className="absolute w-[137px] h-[95px] top-44 left-10 z-30">
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                src="/images/plane.png"
                alt="Ornament"
              />
            </div>
            <div className="absolute w-[137px] h-[95px] top-56 right-5 z-10">
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                src="/images/plane.png"
                alt="Ornament"
              />
            </div>
            <div className="relative z-20 transform -translate-x-16">
              <Image
                priority
                layout="responsive"
                width="100%"
                height="100%"
                src="/images/hero-traveller.png"
                alt="Traveling Agency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
