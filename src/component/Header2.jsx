import React from 'react'
import { Link } from 'react-router-dom'
const Header2 = () => {
  return (
    <div className='  fixed top-0 w-full p-16 md:p-20 flex justify-between'>
      <img src="" alt="" />
    <Link to='/' className=" header md:text-xl text-sm border-4 border-gray-200 font-bold transition-all duration-300 hover:bg-white hover:text-black font-[anzo2] px-4 py-2 rounded-full bg-black  text-white">
          Close
    </Link>
    </div>
  )
}

export default Header2
