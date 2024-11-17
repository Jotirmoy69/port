import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  useGSAP(function(){
    
    gsap.from(".header", {
      opacity: 0,
      x: 100,
      duration: 1,
      stagger:0.5,
    })
  });
  return (
    <div className="bg-transparent backdrop-blur-xs fixed top-0 w-full h-20  rounded-b-9xl  px-10  flex item-center justify-between z-10">
      <img src="./src/assets/icon.png"className="mt-5" alt="" />
      <div className="flex items-end flex-row">
        <Link to="/menu">
        <IoMenu className="md:text-5xl text-5xl bgk text-gray-300 header"  /> 
          </Link> 
      </div>
    </div> 
  );
};

export default Header;
