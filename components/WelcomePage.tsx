import React from "react";
import ManyCoins from "@/assets/photos/ManyCoins.png";
import Image from "next/image";
import ForwardGreen from "@/assets/icons/ForwardGreen.svg";
import ForwardWhite from "@/assets/icons/ForwardWhite.svg";
import Logo from "@/assets/photos/Logo.png";

const WelcomePage = () => {
  return (
    <div className="h-fit py-6 sm:py-12 md:p-0  md:h-[640px] lg:h-[720px] xl:h-[840px] 2xl:h-[968px] flex flex-col md:flex-row justify-center items-center text-sm lg:text-base gap-6 xl:gap-32">
      {/* Left side component */}
      <div className="flex flex-col w-5/6 md:w-1/2 h-full items-center justify-center gap-10">
        <div className="flex flex-col gap-7 h-fit md:h-auto w-full md:w-[320px] lg:w-[420px] xl:p-0 xl:w-[420px]">
          {/* <div className='flex flex-col gap-7 md:p-8 lg:p-10 xl:p-0 xl:w-[420px]'> */}
          {/* Free */}
          <div className="text-base lg:text-lg hidden md:flex flex-row items-center justify-center bg-[#05BE70] rounded-full px-2 opacity-70">
            <div className="py-1 px-2 lg:px-4  text-black font-bold bg-white rounded-full">
              Free
            </div>
            <div className="py-3 text-white font-bold w-full text-center">
              Carbon Coins System
            </div>
          </div>

          {/* Welcome */}
          <div className="text-5xl sm:text-7xl md:text-5xl lg:text-6xl text-center md:text-start font-bold">
            <div className="relative md:hidden w-full flex items-center justify-center mb-12">
              <Image src={Logo} alt="" className="object-contain w-40 h-40" />
            </div>
            <p className="hidden md:flex lg:tracking-widest">Welcome to</p>
            <p className="hidden md:flex tracking-tighter lg:tracking-normal">
              Carbon Coins
            </p>
            <div className="hidden md:flex  lg:tracking-widest">
              System ! ! !
            </div>
            <div className="flex md:hidden tracking-tighter sm:tracking-tight">
              Welcome to Carbon Coins System ! ! !
            </div>
          </div>
          <div className="text-center md:text-justify">
            Carbon Coin is our revolutionary digital currency backed by
            real-world carbon credits. When you engage in eco-friendly practices
            or offset your carbon footprint.
          </div>

          {/* Try it for FREE */}
          <div className="w-full md:w-fit transition duration-100 ease-in-out cursor-pointer py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 bg-[#05BE70] rounded-full font-bold flex flex-row gap-6 items-center justify-center group hover:bg-white">
            <p className="group-hover:text-black text-lg">Try it for FREE</p>
            <div className="relative bg-white p-2 rounded-full group-hover:hidden">
              <Image src={ForwardGreen} alt="" className="w-6 h-6" />
            </div>
            <div className="hidden bg-black p-2 rounded-full group-hover:flex">
              <Image src={ForwardWhite} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side component */}
      <div className="hidden relative w-full md:h-auto md:w-1/2 md:flex ">
        <Image
          src={ManyCoins}
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
