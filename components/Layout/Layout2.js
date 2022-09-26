import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
function Layout2({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "NextFLEX" : "NextFLEX"}</title>
        <meta name="description" content="Modern one-stop e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="max-w-[1180px]">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout2;
