import { useSession } from 'next-auth/react'


export default function Admin() {

  return (
    <div className='bg-red-300'>
      hello only admin can view me 
    </div>
  )
}