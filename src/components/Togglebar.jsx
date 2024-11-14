import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

function Togglebar() {
  return (
    <>
    <div className='flex justify-between bg-indigo-500 text-white font-semibold text-2xl place-content-end'>
      <icon className=''>Ajith Reddy</icon>
      <ul className='flex space-x-6'><li> <a href='#'>Home</a></li>
      <li> <a href='#'>About</a></li>
      <li> <a href='#'>Services</a></li>
      <li> <a href='#'>Projects</a></li>
      <li> <a href='#'>Contact</a></li>
      <li className='pt-1 pr-8'> <a href='#'> <MdOutlineDarkMode /> </a></li></ul>
    </div>
    <br />
    
    </>
  )
}

export default Togglebar
