import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      status: string;
      message: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}

