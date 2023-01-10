import React, { useState } from "react";

import InputModal from "../InputModal";
import ShowModal from "../ShowModal";

let FeedView = (props) => {
  let {
    urlInputModal,
    setInputUrlModal,
    urlModalOpenFunc,
    urlData,
    setUrlData,
    urlShowModal,
    setUrlShowModal,
  } = props;

  const [inputData, setInputData] = useState("");

  let handleSubmitBtn = () => {
    setInputData;
  };

  if (urlInputModal) {
    return (
      <>
        <InputModal
          urlInputModal={urlInputModal}
          setInputUrlModal={setInputUrlModal}
          urlModalOpenFunc={urlModalOpenFunc}
          urlData={urlData}
          setUrlData={setUrlData}
          setUrlShowModal={setUrlShowModal}
        ></InputModal>
      </>
    );
  }
  if (urlShowModal) {
    return (
      <>
        <ShowModal
          urlInputModal={urlInputModal}
          setInputUrlModal={setInputUrlModal}
          urlModalOpenFunc={urlModalOpenFunc}
          urlData={urlData}
          setUrlData={setUrlData}
          setUrlShowModal={setUrlShowModal}
        ></ShowModal>
      </>
    );
  }

  return (
    <>
      {}
      {/* <input
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
      >버튼</button> */}
    </>
  );
};
export default FeedView;
