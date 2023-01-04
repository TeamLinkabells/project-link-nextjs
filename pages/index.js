import Link from "next/link";
import Logo from "../public/logo.svg";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#0074FF]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col bg-[#0074FF]">
          <div className="mb-8">
            <Logo />
          </div>

          <p className="mb-8 leading-relaxed text-white">
            나만의 링크 저장소, 링커벨
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-[#0074FF] bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link href="/login">로그인 페이지로 이동하기</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
