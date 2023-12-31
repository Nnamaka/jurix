import NextAuth , { NextAuthOptions  }from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions  = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID! as string,
      clientSecret: process.env.GOOGLE_SECRET! as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
// import NextAuth from "next-auth/next"
// import { authOptions } from "@/lib/authOptions"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST, authOptions }
