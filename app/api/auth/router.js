import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginDummy } from "@/lib/api";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials) return null;

          const user = await loginDummy({
            username: credentials.username,
            password: credentials.password,
          });

          // Ensure token exists
          if (!user || !user.token) return null;

          return {
            id: user.id,
            username: user.username,
            email: user.email,
            token: user.token,
          };
        } catch (err) {
          console.error("Login failed:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
