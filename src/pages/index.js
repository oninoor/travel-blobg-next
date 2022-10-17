import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import Destinations from "components/Destinations";
import EasyAndFast from "components/EasyAndFast";
import Testimonials from "components/Testimonials";
import Image from "next/image";

import DecorGetinTouch1 from "images/decor-get-in-touch-1.svg";
import DecorGetinTouch2 from "images/decor-get-in-touch-2.svg";
import DecorPlus2 from "images/decor-plus-style-2.svg";
import Logo from "images/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative mb-28">
        <Hero />
      </section>

      {/* Categories */}
      <section className="mb-32">
        <Categories />
      </section>

      {/* Top Destinations */}
      <section className="mb-28">
        <Destinations />
      </section>

      {/* Easy and Fast */}
      <section className="mb-28">
        <EasyAndFast />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Partner */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  className="object-none"
                  layout="fill"
                  src={"/images/axon.png"}
                  alt="in Partnership with Axon"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  className="object-none"
                  layout="fill"
                  src={"/images/jetstar.png"}
                  alt="in Partnership with Jetstar"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  className="object-none"
                  layout="fill"
                  src={"/images/expedia.png"}
                  alt="in Partnership with Expedia"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  className="object-none"
                  layout="fill"
                  src={"/images/qantas.png"}
                  alt="in Partnership with Qantas"
                />
              </div>
            </div>
            <div className="w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  className="object-none"
                  layout="fill"
                  src={"/images/alitalia.png"}
                  alt="in Partnership with Alitalia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="mb-28 relative">
        {/* Decoration */}
        <div className="absolute w-36 h-36 -bottom-10 right-5 -z-10">
          <DecorPlus2 className="decor-plus-style-2" />
        </div>

        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col justify-center items-center bg-[#DFD7F9]/20 rounded-tl-[120px] rounded-3xl relative py-20 px-36 z-30">
            {/* Corner Button */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#5E3BE1] to-[#747DEF] absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <span className="material-icons text-3xl text-white transform -rotate-45 -translate-y-[2px] translate-x-[2px]">
                send
              </span>
            </div>
            {/* Ornament 1 */}
            <div className="w-[264px] absolute top-0 right-0">
              <DecorGetinTouch1 className="stroke-accent-6" />
            </div>
            {/* Ornament 2 */}
            <div className="w-[389px] absolute bottom-0 left-0">
              <DecorGetinTouch2 className="stroke-accent-6" />
            </div>
            <h3 className="text-3xl font-semibold text-[#5E6282] text-center leading-relaxed mb-20">
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h3>
            <div className="flex justify-center items-center space-x-6 w-full">
              <fieldset className="relative group w-5/12 block overflow-hidden">
                <span className="material-icons text-gray-400 absolute translate-y-5 z-10 translate-x-6">
                  email
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="py-6 pl-16 pr-16 block w-full text-sm rounded-xl focus:text-gray-800 focus:outline-accent-3"
                />
              </fieldset>
              <button className="bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white rounded-xl py-5 px-12 hover:shadow-great transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start mb-20">
            {/* Col Logo */}
            <div className="w-3/12 pr-10 flex flex-col justify-start">
              <h2 className="text-4xl text-gray-900 mb-5">Jadoo.</h2>
              <p className="text-sm text-gray-500">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>

            {/* Col Nav */}
            <div className="flex justify-center items-start space-x-20 w-6/12 px-5">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  Company
                </h3>
                <ul className="flex flex-col space-y-3 items-start justify-start">
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Mobile</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  Contact
                </h3>
                <ul className="flex flex-col space-y-3 items-start justify-start">
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Help/FAQ</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Press</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Affilates</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-8">More</h3>
                <ul className="flex flex-col space-y-3 items-start justify-start">
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Airlinefees</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Airline</a>
                    </Link>
                  </li>
                  <li className="text-lg text-gray-500">
                    <Link href={"#"}>
                      <a>Low fare tips</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col Social */}
            <div className="w-3/12 flex justify-end items-end flex-col pl-5">
              {/* Socials */}
              <div className="flex justify-center items-center space-x-6 text-sm mb-6">
                <Link href={"#"}>
                  <div className="h-10 w-10 bg-white rounded-full shadow-md flex justify-center items-center cursor-pointer">
                    Fb
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="h-10 w-10 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 text-white rounded-full shadow-md flex justify-center items-center cursor-pointer">
                    In
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="h-10 w-10 bg-white rounded-full shadow-md flex justify-center items-center cursor-pointer">
                    Tw
                  </div>
                </Link>
              </div>
              <p className="text-xl text-gray-500">Discover our app</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            All rights reserved@jadoo.co
          </p>
        </div>
      </footer>
    </div>
  );
}
