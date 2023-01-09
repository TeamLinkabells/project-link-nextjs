import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";
import Logo from "../public/logo.svg";

const Home = () => {
  const { session, loading } = useSession();

  //로그인이 되어있을 때
  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  //로그인이 되어있지 않을 때
  return (
    // <>
    //   Not signed in <br />
    //   <button onClick={() => signIn()}>Sign in</button>
    // </>

    // ----------------------원래 만들어 놓은 부분--------------------
    <>
      <section>
        <div className="mx-auto flex px-5 py-24 items-center justify-center flex-col bg-[#0074FF] h-screen">
          <div className="mb-10">
            <Logo />
          </div>

          <p className="mb-12 leading-relaxed text-white text-2xl">
            나만의 링크 저장소, 링커벨
          </p>
          <div className="flex justify-center">
            <button
              className="flex text-[#0074FF] bg-white border-0 focus:outline-none rounded text-lg h-[80px]
             w-[360px] items-center justify-center drop-shadow-2xl"
              onClick={() => signIn()}
            >
              {/* <Link
                href="/login"
                className="py-2 px-6 flex items-center justify-center w-full h-full text-xl font-medium"
              > */}
              로그인 페이지로 이동하기
              {/* </Link> */}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
