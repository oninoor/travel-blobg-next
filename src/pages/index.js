import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import Destinations from "components/Destinations";
import EasyAndFast from "components/EasyAndFast";
import Testimonials from "components/Testimonials";
import Image from "next/image";

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
    </div>
  );
}
