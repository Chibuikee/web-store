import Image from "next/image";
import React from "react";

function Wishesbuilder({ WishesData }) {
  const { Wishes, HandleDelete, HandleAddToCart } = WishesData;
  return (
    <section>
      <div>
        <div className="flex justify-between">
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Status</h3>
        </div>
        <div className="grid grid-flow-col">
          {Wishes && (
            <>
              <div>
                <Image
                  src={Wishes.media.imageUrl}
                  width={100}
                  height={100}
                  alt="Shoe"
                />
              </div>
              <h3>{Wishes.title}</h3>
              <h4>${Wishes.retailPrice}</h4>
            </>
          )}
          <div className="flex">
            <button
              className="px-2 py-1 border border-solid border-black bg-[red]"
              aria-label="Decrement value"
              onClick={() => HandleDelete({ id: Wishes.id })}
            >
              Remove
            </button>
            <button
              className=" border border-solid border-black bg-[red]"
              aria-label="Decrement value"
              onClick={() => HandleAddToCart(Wishes)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishesbuilder;
