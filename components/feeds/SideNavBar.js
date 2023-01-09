import React from "react";
import { useState } from "react";
import Link from "next/link";

import SidebarBtn from "../../public/sidebar_button.svg";
import ColorLogo from "../../public/logo_color.svg";
import Setting from "../../public/setting.svg";
import Logout from "../../public/logout.svg";
import tw from "tailwind-styled-components";

const SidebarMenu = tw.div`
h-10 flex items-center text-[#666666] hover:bg-[#E1EEFF]
`;

function SideNavBar(props) {
  let { urlModal, setUrlModal, urlModalOpenFunc } = props;
  // console.log("내브바", props);

  const [toggleMenu, setTogleMenu] = useState(true);

  const menuOpenFunc = () => {
    setTogleMenu(!toggleMenu); // on,off 개념 boolean
  };

  return (
    <>
      <div className={toggleMenu ? "h-screen w-[240px]" : "h-screen"}>
        <div
          className={
            toggleMenu
              ? "w-[240px] h-full bg-[#FAFAFA] fixed top-0 left-0 border-r border-[#EDEDED] duration-100 flex flex-col justify-between"
              : "w-[240px] h-full bg-[#FAFAFA] fixed top-0 -left-[240px] border-r border-[#EDEDED] duration-100 flex flex-col justify-between"
          }
        >
          <ColorLogo
            width="140"
            height="26"
            viewBox="0 0 300 60"
            className="m-auto mt-10"
          />
          <button
            className="absolute top-1/2 -right-5 translate-y-[-50%]"
            onClick={menuOpenFunc}
          >
            <SidebarBtn />
          </button>
          <div className="pt-6 mb-auto">
            <div className="mx-6">
              <button
                className="w-full h-10 bg-white border border-[#0074FF] rounded-[5px] text-[#0074FF] font-medium"
                onClick={urlModalOpenFunc}
              >
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
          <div>
            <ul className="mx-6 mb-7">
              <li className="flex mt-6 text-[#666666] cursor-pointer w-fit">
                <Setting />
                <p className="ml-2">설정</p>
              </li>
              <li className="flex mt-6 text-[#666666] cursor-pointer w-fit">
                <Logout />
                <p className="ml-2">로그아웃</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
