import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/Cart";
import ShoePreviewBuilder from "../../components/ShoePreviewBuilder";
import { AddToWishList } from "../../slices/Wishlist";
import Layout1 from "../../components/Layout/Layout1";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import StoreItemBuilder from "../../components/StorePage/StoreItemBuilder";
function Shoedetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = router.query.Shoedetails;
  const [Shoes, setShoes] = useState(null);
  const [desc, setDesc] = useState(null);
  const [comment, setComment] = useState(null);
  const { mainData } = useSelector((state) => state);
  const fetchedShoeDetails = mainData.find((item) => item.id === productId);
  useEffect(() => {
    setShoes(fetchedShoeDetails);
  }, [fetchedShoeDetails]);

  return (
    <Layout1>
      <section>
        <div className="filter brightness-50 bg-[url('/static/images/Wallpapers/thomas-serer-R_0rTS9ENnk-unsplash.jpg')] bg-center bg-cover w-[100%] h-[120px] text-white">
          <h3 className="">Home/Preview item</h3> <h2>Preview item</h2>
        </div>
        <div className="w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] mx-auto">
          <div>
            {Shoes?.media.imageUrl && (
              <ShoePreviewBuilder item={{ Shoes, setShoes }} />
            )}
            <h1 className="">
              Details of the shoes and the cost and description
            </h1>
          </div>
          <div className="flex justify-between text-xs">
            <button
              className="bg-black text-white py-2 px-6 w-[45%] rounded focus:outline-none focus:shadow-outline"
              onClick={() => dispatch(addToCart(Shoes))}
            >
              To Cart
            </button>
            <button
              className="bg-black text-white py-2 px-6 w-[45%] rounded focus:outline-none focus:shadow-outline"
              onClick={() => dispatch(AddToWishList(Shoes))}
            >
              to wishlist
            </button>
          </div>
          <div className="">
            <div
              onClick={() => setDesc(!desc)}
              className="Description-btn flex items-center"
            >
              <span> Description </span>
              {desc ? (
                <RiArrowDropUpLine className="DropDown" />
              ) : (
                <RiArrowDropDownLine className="DropUp" />
              )}
            </div>
            {desc && (
              <p className="text-xs md:w-[60%]">
                <span className="block">
                  This is body text. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry`s standard dummy text ever since the 1500s.
                </span>
                <span className="block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
                <span className="block">
                  • It has survived not only five centuries.
                </span>
                <span className="block">
                  • But also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages.
                </span>
                <span className="block">
                  • And more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </span>
                <span className="block">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s.
                </span>
              </p>
            )}
          </div>
          <div>
            <div
              onClick={() => setComment(!comment)}
              className="Description-btn flex items-center"
            >
              <span>Reviews</span>
              {comment ? (
                <RiArrowDropUpLine className="DropDown" />
              ) : (
                <RiArrowDropDownLine className="DropUp" />
              )}
            </div>
            {comment && (
              <p>
                <span>John Doe</span>
                <span className="text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </p>
            )}
          </div>
          <div className="grid grid-cols-[minmax(50px,100px)_minmax(50px,100px)_minmax(50px,100px)_minmax(50px,100px)] sm:grid-cols-[minmax(100px,250px)_minmax(100px,250px)_minmax(100px,250px)_minmax(100px,250px)] lg:grid-cols-4 gap-5 justify-center">
            {mainData?.slice(0, 4).map((item) => {
              return item.media.imageUrl && <StoreItemBuilder item={item} />;
            })}
          </div>
          <button className="p-2  border border-solid bg-[red]">
            Show more
          </button>
        </div>
      </section>
    </Layout1>
  );
}

export default Shoedetails;
