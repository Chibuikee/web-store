import React from "react";
import Image from "next/image";

function cartBuilder({ cartData }) {
  const { Shoes, HandleDelete } = cartData;
  return (
    <>
      {Shoes && Shoes.media.imageUrl && (
        <div className="bg-[#b1b6bb]   ">
          <div>
            <Image
              src={Shoes.media.imageUrl}
              width={100}
              height={100}
              alt="Shoe"
            />
          </div>
          <h5>{Shoes.brand}</h5>
          <h5>{Shoes.name}</h5>
          <h5>{Shoes.retailPrice}</h5>
          <button
            className="p-2 border border-solid border-black bg-[red]"
            aria-label="Decrement value"
            onClick={() => HandleDelete({ id: Shoes.id })}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
}

export default cartBuilder;
