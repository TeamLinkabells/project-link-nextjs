import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

import FeedList from "../components/feeds/FeedView";
import FeedLayout from "../components/FeedLayout";

import tw from "tailwind-styled-components";
import FeedView from "../components/feeds/FeedView";



export default function Feed() {
  const [urlData, setUrlData] = useState(""); //url 입력 데이터
  const [statusOne, setStaus] = useState(false);

  const [urlInputModal, setInputUrlModal] = useState(false); //모달인풋데이터
  const [urlShowModal, setUrlShowModal] = useState(false);   //모달쇼

  const { data, status, session } = useSession();  //세션 확인

  const urlModalOpenFunc = () => {
    setInputUrlModal(!urlInputModal);
  };

  // console.log("데이터", data);
  // console.log("세션", session);

  return (
    <>
      <FeedLayout
        urlInputModal={urlInputModal}
        setInputUrlModal={setInputUrlModal}
        urlModalOpenFunc={urlModalOpenFunc}
      >
        <section className="text-gray-600 m-auto px-20 py-5">
          <div className="container">
            <div className="flex flex-wrap gap-5" />
            <FeedView
              urlInputModal={urlInputModal}
              setInputUrlModal={setInputUrlModal}
              urlModalOpenFunc={urlModalOpenFunc}
              urlData={urlData}
              setUrlData={setUrlData}
              urlShowModal={urlShowModal}
              setUrlShowModal={setUrlShowModal}
            />
          </div>
        </section>
      </FeedLayout>
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
