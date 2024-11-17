import React from 'react'
import Header2 from '../component/Header2'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MenuPage = () => {
  useGSAP(function(){
    gsap.from('.media', {
      duration: 1,
       opacity: 0,
        y: 100,
         stagger: 0.5
        })
  })
  return (
    <>
    <Header2 />
    <div className='bg-white p-10 text-black h-screen'>
      
      <div className='h-full shadow-lg shadow-black w-full rounded-2xl bg-cover p-5  bg-blck'>
        <div className='h-1/3 w-full font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <a className='font-[anzo5] text-center ' href="https://www.instagram.com/jotirmoy_69?igsh=MXRvOWNxd2dlZzV2 ">INSTAGRAM</a>
        </div>
        <div className='h-1/3 w-full font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <a className='font-[anzo5] text-center ' href="https://www.facebook.com/profile.php?id=100082191162158&mibextid=ZbWKwL ">FACEBOOK</a>
        </div>
        <div className='h-1/3 w-full font-[anzo5] text-7xl flex items-center  md:text-9xl p-5 border-b-2 justify-center media' >
        <a className='font-[anzo5] text-center ' href="www.linkedin.com/in/jotirmoy-bhowmik-70aa18321  ">LINKEDIN</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default MenuPage
