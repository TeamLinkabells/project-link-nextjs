import { useState } from 'react'
import ColorLogo from "../public/logo_color.svg";

import tw from "tailwind-styled-components"

const Logodiv = tw.div`
m-auto 
mb-[50px]
`

const InputDiv = tw.div`
relative mb-4
`

const InputSmall = tw.input`
w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-[60px]
`

export default function SignUp() {


   const [linkInfo, setLinkInfo] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
   });

   const [passwordError, setPassword] = useState(false)


   let handleInput = (e) => {
      // console.log(e.target.value),
      setLinkInfo({
         ...linkInfo,
         [e.target.name]: e.target.value
      })
   }

   let handleConfirmPwd = (e) => {
      if (e.target.value != linkInfo.password) {
         setPassword(true)
      } else {
         setPassword(false)
      }

   }


   return (
      <>
         <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
               <div className="lg:w-2/6 md:w-1/2 y-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                  <Logodiv>
                     <ColorLogo />
                  </Logodiv>


                  <form>
                    <InputDiv>
                        <label for="email" className="leading-7 text-sm text-gray-600">이메일</label>
                        <InputSmall  type="text" id="email" name="email" value={linkInfo.email} placeholder="이메일을 입력해 주세요."
                           onChange={handleInput}>
                        </InputSmall>
                     </InputDiv>
                     <InputDiv>
                        <label for="password" className="leading-7 text-sm text-gray-600" placeholder="Email">비밀번호</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-[60px]" placeholder="비밀번호를 입력해 주세요." onChange={handleInput} />
                        </InputDiv>
                        <InputDiv>
                        <label for="confirmPassword" className="leading-7 text-sm text-gray-600" placeholder="Email">비밀번호 확인</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-[60px]"
                           placeholder="비밀번호를 한번 더 입력해 주세요." onChange={handleConfirmPwd} />
                        {console.log(passwordError)}
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                        </InputDiv>
                     <InputDiv>
                        <label for="name" className="leading-7 text-sm text-gray-600" placeholder="Email">이름</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-[60px]" placeholder="이름을 입력해 주세요." onChange={handleInput} />
                        {console.log("이메일", linkInfo.email)}
                        {console.log("비밀번호", linkInfo.password)}
                        {console.log("비번확인", linkInfo.confirmPassword)}
                        {console.log("이름", linkInfo.name)}
                        </InputDiv>
                     <button type="submit" className="text-white bg-[#0074FF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg h-[60px]">가입하기</button>
                  </form>
               </div>
            </div>
         </section>
      </>
   )
}
