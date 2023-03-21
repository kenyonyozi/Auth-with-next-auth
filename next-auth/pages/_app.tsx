import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'

import { SessionProvider } from "next-auth/react"



//this checks if theres no session and routes to login works on all pages it called 
function Auth({ children } :any) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return (
      null
      // <div> Loading... </div>
    );
  }
  return children;
}




export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <SessionProvider session={pageProps.session}>
    {Component.auth ? (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    ) : (
      <Component {...pageProps} />
    )}
  </SessionProvider>
    // <SessionProvider session={session}>
    //   <Component {...pageProps} />
    // </SessionProvider>
  )
}