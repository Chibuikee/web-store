import React from "react";

function PopUp({ data }) {
  const { previewData, setPreview } = data;
  return (
    <div>
      <div className="flex">
        <h2>{previewData?.heading}</h2>
        <span onClick={() => setPreview(null)}>&#x2190;</span>
      </div>
      <p>{previewData?.text}</p>
    </div>
  );
}

export default PopUp;
