import React from "react";
import { BsArrowLeft } from "react-icons/bs";
function PopUp({ data }) {
  const { previewData, setPreview } = data;
  return (
    <div>
      <div className=" py-1 bg-red-500 relative rounded">
        <h2 className="mx-auto truncate w-[70%]">{previewData?.heading}</h2>
        <BsArrowLeft
          className="absolute right-5 top-2 "
          onClick={() => setPreview(null)}
        />
      </div>
      <p className="rounded bg-[#cac1c1] p-5">{previewData?.text}</p>
    </div>
  );
}

export default PopUp;
