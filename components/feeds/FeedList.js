import React, { useState } from "react";

let FeedList = () => {
  const [inputData, setInputData] = useState("");

  let handleSubmitBtn = () => {
    setInputData;
  };

  return (
    <>
      <input
        type="text"
        name="contents"
        placeholder="URL을 붙여넣으세요"
        value={inputData}
        onChange={(e) => {
          {
            setInputData(e.target.value);
          }
        }}
      ></input>
      <button
        onClick={() => {
          alert(inputData);
          setInputData("");
        }}
      >버튼</button>

      
    </>
  );
};
export default FeedList;
