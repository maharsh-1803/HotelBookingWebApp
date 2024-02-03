import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-sky-950 py-6'>
        <div className='container ma-auto flex justify-between'>
            <span className='text-3xl text-white font-bold tracking-tight m-4'>
                <Link to='/'>CampHolidays</Link>
            </span>
            <span className='flex space-x-2'>
                <Link to='/sign-in' className='flex items-center text-sky-950 bg-white px-3 font-bold hover:bg-sky-800 hover:text-white m-4'>Sign In</Link>
            </span>
        </div>
    </div>
  )
};

export default Header;
