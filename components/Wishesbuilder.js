import Image from "next/image";
import React from "react";

function Wishesbuilder({ WishesData }) {
  const { Wishes, HandleDelete, HandleAddToCart } = WishesData;
  return (
    <div className="gap-2 mt-12 items-center s:grid grid-cols-[1fr_2fr_1fr_1fr_2fr] justify-items-end">
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
          <h3 className="truncate s:w-[200px]">{Wishes.title}</h3>
          <h4 className="justify-self-start md:justify-self-end">
            ${Wishes.retailPrice}
          </h4>
        </>
      )}
      <h4>available</h4>
      <div className="flex h-[fit-content] w-[fit-content] justify-center border border-solid border-black rounded">
        <button
          className="px-2 py-1 text-sm bg-[red]"
          aria-label="Decrement value"
          onClick={() => HandleDelete({ id: Wishes.id })}
        >
          Unwish
        </button>
        <button
          className="px-2 py-1  bg-[#000000] text-red-600 text-sm"
          aria-label="Decrement value"
          onClick={() => HandleAddToCart(Wishes)}
        >
          To cart
        </button>
      </div>
    </div>
  );
}

export default Wishesbuilder;
