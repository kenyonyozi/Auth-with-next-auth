
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";




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
                console.log(res);


                if (res.ok && user) {
                    console.log(user);

                    return user;
                }
                else return null
            }
        })
    ],

    session: {
        strategy: "jwt",
      
    },
    pages: {
        signIn: '/login',

    },
    callbacks:{
        async jwt({token,user}){
            return{...token, ...user}
        },
        async session({session,token,user}){
            session.user =token
            return session
        }
    }
}

export default NextAuth(authOptions)