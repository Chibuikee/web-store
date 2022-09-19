import Head from "next/head";
import Layout from "./Layout/";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>WEB STORE</title>
        <meta name="description" content="Modern one-stop e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}
