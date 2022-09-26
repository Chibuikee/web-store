// import React, { useEffect, useState } from "react";
// import StoreItemBuilder from "../../components/StorePage/StoreItemBuilder";
// import Footer from "../../components/Footer/Footer";
// import ShoesData from "../../ShoesData";
// // import axios from "axios";

// function ShoePreview({ data }) {
//   const [Shoes, setShoes] = useState(null);

//   useEffect(() => {
//     setShoes(data);
//   }, []);
//   return (
//     <section>
//       <div className="max-w-[1180px] mx-auto">
//         <div className="grid grid-cols-4 gap-4">
//           {Shoes?.map((item) => {
//             return (
//               item.media.imageUrl && (
//                 <StoreItemBuilder item={item} key={item.id} />
//               )
//             );
//           })}
//           <h1>Details of the shoes and the cost and description</h1>
//         </div>
//         <Footer />
//       </div>
//     </section>
//   );
// }

// export default ShoePreview;
// export async function getServerSideProps(context) {

//   return {
//     props: { data: ShoesData },
//   };
// }
