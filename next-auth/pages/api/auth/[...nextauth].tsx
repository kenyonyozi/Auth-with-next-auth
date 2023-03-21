
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";




export const authOptions: NextAuthOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as any
                const res = await fetch('http://localhost:9000/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const user = await res.json();
                console.log({ user });

                if (res.ok && user) {
                    console.log(',,,,,', user);

                    return user;
                }
                else return null
            }
        })
    ],

    session: {
        strategy: "jwt",
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 5 // 30 days
    },


    pages: {
        signIn: '/login',

    },

    callbacks: {
        //to store the access token in session using adaptors in ts
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token as any
            return session
        }
    }
}

export default NextAuth(authOptions)