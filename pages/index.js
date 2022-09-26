import Head from "next/head";
// import Footer from "../components/Footer/Footer";
// import axios from "axios";
import { FetchedAllItems } from "../slices/StoreData";
import { wrapper } from "../store";
import ShoesData from "../ShoesData";
export default function Home() {
  return (
    <section className="">
      <Head>
        <title>WEB STORE</title>
        <meta name="description" content="Modern one-stop e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </section>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(FetchedAllItems(ShoesData));
  }
);
// export async function getStaticProps(context) {
//   return {
//     props: { data: ShoesData },
//   };
// }
