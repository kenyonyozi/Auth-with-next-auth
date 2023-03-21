import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next';
// interface Props {
//   Users: any[];
// }


Contact.auth = {}


export default function Contact({ Users }:any) {

  return (
    <div className=''>
      hello every one can view me


      <h2 className="font-medium bg-indigo-50">Users list</h2>
      {Users?.map((user: any) => (
        <p
          className="py-1 bg"
          key={user.id}
        >{`${user.firstName} ${user.lastName}`}</p>
      ))}
    </div>
  )
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });

  if (session) {
    const res = await fetch('http://localhost:9000/users', {
      method: 'Get',
      headers: {
        authorization: `bearer ${session.user.accessToken}`,
      },
    });
    const data = await res.json()
    const Users = await data.users
    console.log('data', data.users);

    return {
      props: { Users }
    }
  }


  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
}