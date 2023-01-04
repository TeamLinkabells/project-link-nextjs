import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import FormInput from "../components/feeds/FormInput";
import FeedItem from "../components/feeds/FeedItem";


export default function Feed() {

  const [urlData, setUrlData] = useState("");
  const [status, setStaus] = useState(false);


    return (
      <>
      <FormInput urlData={urlData} setUrlData={setUrlData} setStaus={setStaus} status={status}></FormInput>
      {status ? <h1><FeedItem urlData={urlData}></FeedItem></h1> : <></>}
      {/* <div>
        <img src={user.image}/>
        <h1>{user.title}</h1>   
      </div> */}
      </>
    );
  }

    

  //피드 페이지는
  //피드 인풋
  //피드 아이템으로 이루어짐 => 하지만 피드 리스트를 통해서 하나씩 뿌려주는 형태로 이루어져야 함
  