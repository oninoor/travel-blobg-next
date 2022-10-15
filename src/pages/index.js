import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import Destinations from "components/Destinations";

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
      <section className="mb-32">
        <Destinations />
      </section>
    </div>
  );
}
