import React, { useState } from "react";
import PopUp from "./PopUp";
import FAQ from "../../Resources/FAQ.json";
function FAQList() {
  const [previewData, setPreview] = useState();
  /*Amount of items to be displayed */
  const [Amount, setAmount] = useState(false);
  return (
    <div>
      <div>
        <div>{previewData && <PopUp data={{ previewData, setPreview }} />}</div>
        <div className="flex">
          <h3>MUSKNET 2022</h3>
          <div>
            {FAQ.slice(0, 3).map((item, key) => (
              <h3 onClick={() => setPreview({ ...item })} key={key}>
                {item.heading} <span>&#x2192;</span>
              </h3>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex">
          <h3>ABOUT ORDERS</h3>

          {/*conditionally increase or reduce the number of items to be
        displayed */}
          <div>
            {FAQ.slice(3, Amount ? undefined : -3).map((item, key) => (
              <h3 onClick={() => setPreview({ ...item })} key={key}>
                {item.heading}
                <span>&#x2192;</span>
              </h3>
            ))}
          </div>
        </div>
        <button
          className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setAmount(!Amount)}
        >
          {Amount ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
}

export default FAQList;
