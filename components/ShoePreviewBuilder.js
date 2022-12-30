import React from "react";
import Image from "next/image";
function ShoePreviewBuilder({ item }) {
  const { Shoes, setShoes } = item;
  const shoeSizes = [
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
  ];
  const handleSizes = (e) => {
    setShoes((prev) => ({ ...prev, size: e.target.value }));
  };

  return (
    <div className=" sm:flex justify-between ">
      <div>
        {Shoes.media.imageUrl && (
          <Image
            src={Shoes.media.imageUrl}
            width={100}
            height={100}
            alt="Shoe"
          />
        )}
      </div>
      <div>
        <div className="flex text-xs">
          <span className="">For {Shoes.gender}</span>
          <span className="truncate"> / {Shoes.brand}</span>
          <span className="truncate"> / {Shoes.title}</span>
        </div>

        <div>
          <h2>{Shoes.title}</h2>
          <h2>${Shoes.retailPrice}</h2>
          <div className=" w-[260px] md:w-[30vw]  grid grid-cols-8 gap-2">
            {shoeSizes.map((size, key) => (
              <button
                className="p-1 w-[30px] border focus:bg-[rgba(230,230,230,0.44)] border-solid border-[#d17a7a] text-xs"
                key={key}
                value={size}
                onClick={(e) => handleSizes(e)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoePreviewBuilder;
