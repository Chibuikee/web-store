import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/Cart";
import { RemoveFromWishList } from "../slices/Wishlist";
import Wishesbuilder from "../components/Wishesbuilder";
import Layout1 from "../components/Layout/Layout1";
import Link from "next/link";
function Wishlist() {
  const { wishList } = useSelector((state) => state);

  // console.log(count);
  const dispatch = useDispatch();
  const HandleAddToCart = (id) => {
    return dispatch(addToCart(id));
  };
  const HandleDelete = (id) => {
    return dispatch(RemoveFromWishList(id));
  };
  return (
    <Layout1>
      <section>
        {" "}
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1.527),rgba(0,0,0,0.5)),url('/static/images/Wallpapers/peter-aroner-KRvPP5i7DWA-unsplash.jpg')",
          }}
          className="text-[white] text-[1.5rem] bg-center bg-cover w-[100%] h-[220px]"
        >
          <h4 className="px-[28px] pt-8 text-sm">Home/Wish List</h4>
          <h1 className="text-xl mmd:text-3xl font-semibold px-[28px] mt-5">
            WISHLIST
          </h1>
        </div>
        <div className="mt-12 px-[10px] s:px-[initial] w-[90%]  mx-auto  sm:w-[540px] md:w-[720px] lg:max-w-[1280px] xl:max-w-[1536px">
          <div className="hidden  s:grid grid-cols-[3fr_1fr_1fr_2fr] justify-items-end">
            <h3 className="basis-[40%]">Product</h3>
            <h3 className="">Price</h3>
            <h3 className="">Status</h3>
            <h3 className="">Cart</h3>
          </div>
          {wishList.map((data) => (
            <Wishesbuilder
              WishesData={{
                Wishes: data,
                HandleDelete,
                HandleAddToCart,
              }}
              key={data.id}
            />
          ))}

          <h1>this is the Wish list page </h1>
          <Link href="/" passHref>
            <button className="">Back to shop</button>
          </Link>
          {wishList.length === 0 && (
            <h1 className="text-3xl font-bold">YOUR WISHLIST IS EMPTY</h1>
          )}
        </div>
      </section>
    </Layout1>
  );
}

export default Wishlist;
