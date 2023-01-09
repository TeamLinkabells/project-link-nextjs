import React from "react";
import { useState } from "react";
// import { Disclosure } from "@headlessui/react";
import ColorLogo from "../../public/logo_color.svg";
import Link from "next/link";

import tw from "tailwind-styled-components";

const SidebarMenu = tw.div`
h-10 flex items-center text-[#666666] hover:bg-[#E1EEFF]
`;

// const HideMenu = tw.div`
// w-[240px] h-screen bg-black absolute top-0 -left-[240px]
// `

function SideNavBar() {
  const [isOpen, setMenu] = useState(true); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <>
      <div className={isOpen ? "h-screen w-[240px]" : "h-screen"}>
        <div
          className={
            isOpen
              ? "w-[240px] h-full bg-[#FAFAFA] fixed top-0 left-0 border-r border-[#EDEDED] duration-100"
              : "w-[240px] h-full bg-[#FAFAFA] fixed top-0 -left-[240px] border-r border-[#EDEDED] duration-100"
          }
        >
          <ColorLogo
            width="140"
            height="26"
            viewBox="0 0 300 60"
            className="m-auto mt-10"
          />
          <button
            className="absolute top-1/2 -right-[40px]"
            onClick={toggleMenu}
          >
            버튼
          </button>
          <div className="pt-6">
            <div className="mx-6">
              <button className="w-full h-10 bg-white border border-[#0074FF] rounded-[5px] text-[#0074FF] font-medium">
                새 링크 올리기
              </button>
            </div>
            <ul className="mt-5">
              <SidebarMenu>
                <Link href="#" className="w-full h-full flex items-center px-6">
                  전체 링크
                </Link>
              </SidebarMenu>
              <SidebarMenu>
                <Link href="#" className="w-full h-full flex items-center px-6">
                  즐겨찾는 링크
                </Link>
              </SidebarMenu>
            </ul>
          </div>
        </div>
      </div>
    </>
    // <div>
    //     <Disclosure as="nav">
    //         <div className="w-[50px]  h-screen bg-gray-600">
    //             <Disclosure.Button className="absolute top-1/2 left-20 inline-flex items-center peer  justify-center rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white group">
    //             버튼
    //             </Disclosure.Button>
    //             <div className="p-6 w-1/2 h-screen bg-black fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
    //             </div>
    //         </div>
    //     </Disclosure>
    // </div>

    // -----------------------------

    // <div>
    //     <Disclosure as="nav">
    //         <div className="w-[50px]  h-screen bg-gray-600">
    //             <Disclosure.Button className="absolute top-1/2 left-20 inline-flex items-center peer justify-center rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white group">
    //             버튼
    //             </Disclosure.Button></div>

    //         <div className="p-6 w-1/2 h-screen bg-black fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 peer">

    //         </div>
    //     </Disclosure>
    // </div>

    // --------------------------------------------------
    // <div className="relative">
    //      <Disclosure as="nav" className="w-[300px] h-screen absolute top-0 left-0 flex flex-row-reverse">
    //         <Disclosure.Button className="peer">버튼</Disclosure.Button>
    //         <div className="w-full h-screen bg-black"></div>
    //      </Disclosure>
    // </div>
  );
}

export default SideNavBar;
