import Head from "next/head";
import Header from "components/Header";

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
    </div>
  );
}
