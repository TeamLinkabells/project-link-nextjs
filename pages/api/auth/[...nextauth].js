//로그인 인증을 처리할 파일
import connectMongo from "../../../utils/connectMongo";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/schmas/user";

import crypto from "crypto";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "email-password-credential",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },

      //로그인 유효성 검사
      //// 로그인 요청인 "signIn("credentials", { email, password })"에서 넣어준 "email", "password"값이 그대로 들어옴
      async authorize(credentials, req) {
        if (!credentials)
          throw new Error("잘못된 입력값으로 인한 오류가 발생했습니다.");

        const { email, password } = credentials;

        console.log("CONNECTING TO MONGO");

        await connectMongo();

        console.log("CONNECTED TO MONGO");

        //가입된 이메일이 있는지 체크하기
        const checkExisting = await User.findOne({ email });

        //만약 존재하지 않는 회원이라면
        if (!checkExisting) {
          res.json({
            status: false,
            message: "존재하지 않거나 일치하지 않는 이메일입니다.",
          });
          return;
        }

        // DB에 hash형태로 password를 저장하였기 때문에,
        // 요청으로 받아온 password또한 hash형태로 변경
        let hashPassword = passwordHash(password);

        // 만약 DB에 저장되어있는 패스워드와 요청으로 받아온 패스워드가 일치하지 않으면?
        if (hashPassword !== checkExisting.password) {
          res.json({
            status: false,
            message: "비밀번호가 틀렸습니다.",
          });
          return;
        }
        return checkExisting;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      console.log("토큰 : ", token);

      return token;
    },
    async session({ session, token }) {
      console.log("세션", session);

      const checkExisting = await User.findOne({ email: token.email });

      //   session.user =

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

const passwordHash = (password) => {
  return crypto.createHash("sha1").update(password).digest("hex");
};
