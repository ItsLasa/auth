import Link from 'next/link'
import React from 'react'
import Logout from './logout'

const navbar = () => {
  return (
    <nav className='flex justify-center items-center py-6 gap-4 '>
        <Link className='hover:text-orange-600'  href="/">Homepage</Link>
        <Link className='hover:text-orange-600'  href="/profile">Profile</Link>
        <Link className='hover:text-orange-600' href="/premium">Premium</Link>
        <Link className='hover:text-orange-600' href="/login">Login</Link>
        <Logout/>
    </nav>
  )
}

export default navbar