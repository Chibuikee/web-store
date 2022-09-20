import Head from "next/head";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <section className="">
      <Head>
        <title>WEB STORE</title>
        <meta name="description" content="Modern one-stop e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Footer />
    </section>
  );
}
