import Link from "next/link";
import ColorLogo from "../public/logo_color.svg";

export default function Login() {
  return (
    <>
      <section className="text-gray-600 body-font h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen">
          <div className="lg:w-2/6 md:w-1/2 y-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <div className="m-auto mb-[50px]">
              <ColorLogo />
            </div>
            <div className="relative mb-4">
              {/* <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email</label> */}
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out h-[60px]"
                placeholder="Email"
              />
            </div>
            <div className="relative mb-4">
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600" placeholder="Email">Password</label> */}
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out h-[60px]"
                placeholder="Password"
              />
            </div>
            <div>
              <input type="checkbox" id="check1" />
              <label htmlFor="check1" />
            </div>
            <button className="text-white bg-[#0074FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg h-[60px] tracking-tight">
              로그인
            </button>
            <button className="text-white bg-[#BBBBBB] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5 h-[60px] tracking-tight">
              카카오톡 간편 로그인
            </button>
            <p className="text-sm text-gray-500 mt-3 tracking-tight m-auto">
              아직 회원이 아니신가요?{" "}
              <Link href="/signUp">이메일로 회원가입</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
