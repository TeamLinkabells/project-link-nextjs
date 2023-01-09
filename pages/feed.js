import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

import FormInput from "../components/feeds/FormInput";
import FeedItem from "../components/feeds/FeedItem";
import FeedLayout from "../components/FeedLayout";

import tw from "tailwind-styled-components";

const ListBoxContainer = tw.div`
  w-full
  sm:w-[calc(50%-10px)] 
  lg:w-[calc(100%/3-40px/3)]
  xl:w-[calc(25%-15px)]  
  2xl:w-[calc(20%-16px)] 
  mt-5
`;
const ListBox = tw.div`
  h-full 
  border-[1px]
  border-[#EDEDED]
  rounded-lg 
  overflow-hidden
  hover:bg-[#F2F7FF]
`;

export default function Feed() {
  const [urlData, setUrlData] = useState("");
  const [statusOne, setStaus] = useState(false);

  const { data, status, session } = useSession();

  console.log("데이터", data);
  console.log("세션", session);

  return (
    <>
      <FeedLayout />
      <section className="text-gray-600 m-auto px-20 py-5">
        <div className="container">
          <div className="flex flex-wrap gap-5"></div>
        </div>
      </section>
      {/* ---------------------원래 피드----------------------- */}
      {/* <FormInput
        urlData={urlData}
        setUrlData={setUrlData}
        setStaus={setStaus}
        status={status}
      ></FormInput>
      {statusOne ? (
        <h1>
          <FeedItem urlData={urlData}></FeedItem>
        </h1>
      ) : (
        <></>
      )} */}
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
