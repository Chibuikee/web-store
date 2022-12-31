import React from "react";
import Image from "next/image";
import {
  MdOutlineCancel,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

function cartBuilder({ cartData }) {
  const { Shoes, HandleDelete, HandleReduce, HandleIncrement } = cartData;
  return (
    <>
      {Shoes && Shoes.media?.imageUrl && (
        <div className="bg-[#ffffff] relative w-[90%] flex items-center text-[11px] font-bold mr-3">
          <button
            className=" "
            aria-label="Decrement value"
            onClick={() => HandleDelete({ id: Shoes.id })}
          >
            <MdOutlineCancel />
          </button>
          <div className="">
            <Image
              src={Shoes.media.imageUrl}
              width={100}
              height={100}
              alt="Shoe"
            />
          </div>
          <h5>{Shoes.brand}</h5>
          <h5 className="truncate px-2">{Shoes.name}</h5>
          <h5 className="absolute right-0">{Shoes.retailPrice}</h5>

          <div className="flex items-center border px-2 py-1 justify-between w-[50px] border-red-300">
            <button
              className=""
              aria-label="Decrement value"
              onClick={() => HandleReduce({ id: Shoes.id })}
            >
              <MdKeyboardArrowLeft />
            </button>
            <span className="font-medium">{Shoes.qty}</span>
            <button
              className=""
              aria-label="Increment value"
              onClick={() => HandleIncrement({ id: Shoes.id })}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default cartBuilder;
