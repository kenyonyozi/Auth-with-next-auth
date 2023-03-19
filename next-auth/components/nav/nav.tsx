import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

export default function Nav() {
    const { data: session, status } = useSession();

    console.log(session);
    console.log('status', status);

    // if (!session) {
      
    // }



    return (
        <div>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Contact</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>

                            <li>
                                <a href="/pricing" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="/admins" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div>Access Token: {accessToken}</div> */}
                {session? (
                    <>
                        {/* <p className='bg-white'>{session.user.name}</p> */}
                        <button className='bg-white' onClick={() => signOut()}>sign out</button>
                    </>
                ) : (
                    <button className='bg-white' onClick={() => signIn()}>sign in</button>
                )}
            </nav>

        </div>
    )
}



// export async function getServerSideProps({ req }) {
//     const session = await getSession({ req });

//     console.log(session);
//     if (!session) {
//         return{
//         redirect:{
//             destination : '/login',
//             permanent: false,
//         }
//         }
//     }

//     return {
//         props: {
//             session
//         }
//     }


// }