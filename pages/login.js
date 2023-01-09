import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useCallback } from "react";
import ColorLogo from "../public/logo_color.svg";

import router from "next/router";

import tw from "tailwind-styled-components";

const InputBox = tw.input`
w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out h-[60px] bg-[#F1F1F5]
`;

export default function Login() {
  const onSubmit = async (e) => {
    e.preventDefault();
    //Form안에서 이메일, 패스워드 가져오기
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await signIn("email-password-credential", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000/feed",
    });
    console.log(response);

    if (response.status === 200) {
      alert("로그인에 성공했습니다.");
      router.push("/feed");
    } else {
      alert("로그인에 실패했습니다.");
    }
  };

  // -----------------------원래----------------------------
  // const [LoginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  // });

  // let handleInput = (e) => {
  //   // console.log(e.target.value),
  //   setLoginData({
  //     ...LoginData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // let clickLoginBtn = async () => {
  //   if (LoginData.email === "") {
  //     alert("이메일을 입력해주세요.");
  //     return;
  //   }

  //   if (LoginData.password === "") {
  //     alert("비밀번호를 입력해주세요.");
  //     return;
  //   }
  // };

  return (
    <>
      <section className="text-gray-600 body-font h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen">
          <div className="lg:w-2/6 md:w-1/2 y-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <div className="m-auto mb-[50px]">
              <Link href="/">
                <ColorLogo width="300" height="54" viewBox="0 0 300 60" />
              </Link>
            </div>
            <form onSubmit={onSubmit}>
              <div className="relative mb-5">
                <InputBox
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></InputBox>
              </div>
              <div className="relative mb-5">
                <InputBox
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                ></InputBox>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#0074FF] border-0 py-2 px-6 focus:outline-none rounded text-lg h-[60px] tracking-tight mt-2"
              >
                로그인
              </button>
            </form>
            <button className="text-white bg-[#BBBBBB] border-0 py-2 px-6 focus:outline-none rounded text-lg mt-5 h-[60px] tracking-tight">
              카카오톡 간편 로그인
            </button>
            <p className="text-gray-500 mt-10 tracking-tight m-auto">
              아직 회원이 아니신가요?{" "}
              <Link href="/signUp">
                <span className="text-[#0074FF] underline underline-offset-3">
                  이메일로 회원가입
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>

    // -----------------------원래----------------------------
    // <>
    //   <section className="text-gray-600 body-font h-screen">
    //     <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen">
    //       <div className="lg:w-2/6 md:w-1/2 y-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
    //         <div className="m-auto mb-[50px]">
    //           <Link href="/"><ColorLogo width="300" height="54" viewBox="0 0 300 60" /></Link>
    //         </div>
    //         <div className="relative mb-5">
    //           {/* <label for="full-name" className="leading-7 text-sm text-gray-600">Email</label> */}
    //           <InputBox type="email" id="email" name="email" placeholder="Email" onChange={handleInput}></InputBox>
    //         </div>
    //         <div className="relative mb-5">
    //           {/* <label for="email" className="leading-7 text-sm text-gray-600" placeholder="Email">Password</label> */}
    //           <InputBox type="password" id="password" name="password" placeholder="Password" onChange={handleInput}></InputBox>
    //         </div>
    //         <div>
    //           <label className="flex items-center flex-row mb-8">
    //             <input type="checkbox" name="color" value="blue" className="w-4 h-4" />
    //             <span className="ml-2">자동 로그인</span>
    //           </label>
    //         </div>
    //         <button className="text-white bg-[#0074FF] border-0 py-2 px-6 focus:outline-none rounded text-lg h-[60px] tracking-tight" onClick={clickLoginBtn}>로그인</button>
    //         <button className="text-white bg-[#BBBBBB] border-0 py-2 px-6 focus:outline-none rounded text-lg mt-5 h-[60px] tracking-tight">카카오톡 간편 로그인</button>
    //         <p className="text-gray-500 mt-10 tracking-tight m-auto">아직 회원이 아니신가요? <Link href="/signUp"><span className="text-[#0074FF] underline underline-offset-3">이메일로 회원가입</span></Link></p>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
