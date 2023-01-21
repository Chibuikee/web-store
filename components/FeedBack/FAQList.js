import React, { useState } from "react";
import PopUp from "./PopUp";
import FAQ from "../../Resources/FAQ.json";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function FAQList() {
  const [previewData, setPreview] = useState();
  /*Amount of items to be displayed */
  const [Amount, setAmount] = useState(false);
  return (
    <div>
      <div>
        <div>{previewData && <PopUp data={{ previewData, setPreview }} />}</div>
        <div className="xs:flex">
          <h3 className="font-bold basis-[20%]">MUSKNET 2022</h3>
          <div className="basis-[70%]">
            {FAQ.slice(0, 3).map((item, key) => (
              <div
                className="relative text-sm py-2 my-2 rounded border-solid border border-[red]"
                key={key}
              >
                <h3
                  className="mx-auto truncate w-[70%]"
                  onClick={() => setPreview({ ...item })}
                >
                  {item.heading}
                </h3>
                <BsArrowRight className="absolute right-5 top-3 " />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-5" />
        <div className="xs:flex">
          <h3 className="font-bold basis-[20%]">ABOUT ORDERS</h3>

          {/*conditionally increase or reduce the number of items to be
        displayed */}
          <div className="basis-[70%]">
            {FAQ.slice(3, Amount ? undefined : -3).map((item, key) => (
              <div
                className="relative text-sm py-2 my-2 rounded border-solid border border-[red]"
                key={key}
              >
                <h3
                  className="mx-auto truncate w-[70%]"
                  onClick={() => setPreview({ ...item })}
                >
                  {item.heading}
                </h3>
                <BsArrowRight className="absolute right-5 top-3 " />
              </div>
            ))}
          </div>
        </div>
        <button
          className="block w-[150px] mt-5 mb-10 mx-auto bg-black text-white py-1 px- rounded focus:outline-none focus:shadow-outline"
          onClick={() => setAmount(!Amount)}
        >
          {Amount ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
}

export default FAQList;
