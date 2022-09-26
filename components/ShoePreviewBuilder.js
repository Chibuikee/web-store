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
    <div className=" flex justify-center ">
      <div>
        <Image src={Shoes.media.imageUrl} width={100} height={100} alt="Shoe" />
      </div>
      <div>
        <div className="flex">
          <span>{Shoes.gender}</span>
          <span>{Shoes.brand}</span>
          <span>{Shoes.title}</span>
        </div>

        <div>
          <h2>{Shoes.title}</h2>
          <h2>${Shoes.retailPrice}</h2>
          <div className="grid grid-cols-8">
            {shoeSizes.map((size, key) => (
              <button
                className="p-2  border border-solid border-[red]"
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
