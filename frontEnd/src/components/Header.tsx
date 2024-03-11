import React from 'react'
import {Link} from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';

export const Header = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <div className='bg-sky-950 py-6'>
        <div className='container ma-auto flex justify-between'>
            <span className='text-3xl text-white font-bold tracking-tight m-4'>
                <Link to='/'>CampHolidays</Link>
            </span>
            <span className='flex space-x-2'>
              {isLoggedIn ? <>
                <Link to="/my-bookings">My Bookings</Link>
                <Link to="/my-hotels">My Hotels</Link>
                <button>Sign out</button>
              </>:(<Link to='/sign-in' className='flex items-center text-sky-950 bg-white px-3 font-bold hover:bg-sky-800 hover:text-white m-4 rounded-lg'>Sign In</Link>)}
            </span>
        </div>
    </div>
  )
};

export default Header;
