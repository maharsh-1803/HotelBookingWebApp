import React from 'react'
import { Header } from '../components/Header'
import { Header_below } from '../components/Header_below';
import { Footer } from '../components/Footer';

interface Props{
  children :React.ReactNode;
}
export const Layouts = ({children}:Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        {/* <Header_below/> */}
        <div className='container mx-auto py-10 flex-1'>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layouts;
