import React, { useEffect, useState } from "react";
import axios from "axios";

let FeedItem = ({ urlData }) => {
  const [linkInfo, setLinkInfo] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  let getData = () => {
    return  axios.get(
      `https://api.linkpreview.net/?key=2e31fedc1f9e62e652e94bc6756c5606&q=${urlData}`,
      {}
    );
  };

  let func = () => {

    getData().then((res) => {
      if (res.status === 200) {
        setLinkInfo({
          ...linkInfo,
          title: res.data.title,
          description: res.data.description,
          image: res.data.image,
          url: res.data.url,
        });
        return;
      }
    });
  };

  return (
    <>
      <div>
        {/* <h1>url 미리보기 창입니다</h1> */}
        {/* {urlData} */}
      </div>
      <div>
        {useEffect(() => {
          func(linkInfo)
        },[])}
        <img src={linkInfo.image}></img>
        <h3>{linkInfo.title}</h3>
        <p>링크 정보 : {linkInfo.description}</p>
        <p>연결링크 : {linkInfo.url}</p>
      </div>
    </>
  );
};

export default FeedItem;
