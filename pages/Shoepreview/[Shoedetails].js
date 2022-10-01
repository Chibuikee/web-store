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
  const { mainData } = useSelector((state) => state);
  const fetchedShoeDetails = mainData.find((item) => item.id === productId);
  useEffect(() => {
    setShoes(fetchedShoeDetails);
  }, [fetchedShoeDetails]);

  return (
    <Layout1>
      <section>
        <div className="max-w-[1180px] mx-auto">
          <div className="w-full">
            {Shoes?.media.imageUrl && (
              <ShoePreviewBuilder item={{ Shoes, setShoes }} />
            )}
            <h1>Details of the shoes and the cost and description</h1>
          </div>
          <button
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(addToCart(Shoes))}
          >
            addToCart
          </button>
          <button
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(AddToWishList(Shoes))}
          >
            add to WishList
          </button>
          <div className="">
            <div className="Description-btn flex">
              <span> Description </span>
              <RiArrowDropDownLine className="DropDown" />
              <RiArrowDropUpLine className="DropUp" />
            </div>
            <p>
              <span>
                This is body text. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
              <span>• It has survived not only five centuries.</span>
              <span>
                • But also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages.
              </span>
              <span>
                • And more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
            </p>
          </div>
          <div>
            <div className="Description-btn flex">
              <span>Reviews</span>
              <RiArrowDropDownLine className="DropDown" />
              <RiArrowDropUpLine className="DropUp" />
            </div>
            <p>
              <span>John Doe</span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </p>
          </div>
          <div className="flex">
            {mainData?.slice(0, 5).map((item) => {
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
