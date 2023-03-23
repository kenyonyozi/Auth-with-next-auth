export {default} from 'next-auth/middleware'

export const config = {matcher :[]}


//protected routes can be accessed only when logged in



// export async function middleware(req) {
//     const auth = req.nextUrl.clone();
//     auth.pathname = "/auth/new-user";
//     const afterAuth = req.nextUrl.clone();
//     afterAuth.pathname = "/";
  
//     if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/settings") {
//       const session = await getToken({
//         req,
//         secret: process.env.JWT_SECRET,
//         secureCookie: process.env.NODE_ENV === "production",
//       });
//       // You could also check for any property on the session object,
//       // like role === "admin" or name === "John Doe", etc.
//       if (!session) return NextResponse.redirect(auth);
//       // If user is authenticated, continue.
//     }
  
//     if (req.nextUrl.pathname === "/auth/new-user" || req.nextUrl.pathname === "/auth/signin") {
//       const session = await getToken({
//         req,
//         secret: process.env.JWT_SECRET,
//         secureCookie: process.env.NODE_ENV === "production",
//       });
//       // You could also check for any property on the session object,
//       // like role === "admin" or name === "John Doe", etc.
//       if (session) return NextResponse.redirect(afterAuth);
//       // If user is authenticated, continue.
//     }
//   }