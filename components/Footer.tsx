import Image from "next/image";
import React from "react";
import Logo from "@/assets/photos/Logo.png";
import Visa from "@/assets/photos/VisaLogo.png";
import Mastercard from "@/assets/photos/MastercardLogo.png";
import Bitcoin from "@/assets/photos/BitcoinLogo.png";
import Facebook from "@/assets/photos/FacebookLogo.png";
import Instagram from "@/assets/photos/InstagramLogo.png";
import Youtube from "@/assets/photos/YoutubeLogo.png";
import XTwitter from "@/assets/photos/XLogo.png";
import Linkedin from "@/assets/photos/LinkedinLogo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-normal md:flex-row md:px-12 py-20 lg:px-16 lg:py-14 xl:px-36 xl:py-20 gap-12 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16 text-lg lg:text-xl md:h-[800px]">
      {/* LEFT DIV */}
      <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between md:text-sm lg:text-base h-full">
        {/* CARBON COIN */}
        <Link
          className="flex flex-row justify-center w-full h-full md:w-fit md:h-fit gap-6 md:gap-2 lg:gap-4 font-semibold cursor-pointer "
          href={"/"}
        >
          <div className="relative">
            <Image src={Logo} alt="" className="w-10 lg:w-16 object-contain" />
          </div>
          <div className="flex uppercase md:pt-4 items-center justify-center md:justify-normal md:items-start text-xl md:text-base">
            Carbon Coin
          </div>
        </Link>
        {/* QUICK LINK */}
        <div className="flex flex-col gap-4 md:gap-12 h-fit pt-16 items-center justify-center md:items-start md:justify-normal md:pt-0">
          <div className="font-semibold ">Quick Link</div>
          <div className="flex flex-col gap-2 md:gap-6 text-sm lg:text-base font-light items-center justify-center md:items-start md:justify-normal">
            <div className="hover:text-black hover:underline cursor-pointer">
              Home
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Products
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              About
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Features
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Contact
            </div>
          </div>
        </div>
        {/* RESOURCES */}
        <div className="flex flex-col gap-4 md:gap-12 h-fit pt-4 items-center justify-center md:items-start md:justify-normal">
          <div className="font-semibold">Resources</div>
          <div className="flex flex-col gap-2 md:gap-6 text-sm lg:text-base font-light items-center justify-center md:items-start md:justify-normal">
            <div className="hover:text-black hover:underline cursor-pointer">
              Download Whitepaper
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Smart Token
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Blockchain Explorer
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Crypto API
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Interest
            </div>
          </div>
        </div>
      </div>

      {/* WE ACCEPT */}
      <div className="flex flex-col w-full md:w-1/3 justify-between h-full pt-6 md:pt-0">
        <div className="flex flex-col text-xl lg:text-3xl 2xl:text-4xl gap-4 md:gap-10 font-semibold px-6 md:px-0">
          <div className="text-center md:text-left tracking-tight xl:tracking-wide text-xl md:text-base">
            We accept following payment systems
          </div>
          <div className="flex flex-row gap-6 text-base items-center justify-center md:justify-normal">
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-20 h-12 md:w-24 md:h-12 lg:w-28 lg:h-16 xl:w-32  xl:h-20 cursor-pointer">
              <Image
                src={Visa}
                alt=""
                className="object-contain w-14 md:w-10 lg:w-12 xl:w-16"
              />
            </div>
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-20 h-12 md:w-24 md:h-12 lg:w-28 lg:h-16 xl:w-32  xl:h-20 cursor-pointer">
              <Image
                src={Mastercard}
                alt=""
                className="object-contain w-14 md:w-10 lg:w-12 xl:w-16"
              />
            </div>
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-20 h-12 md:w-24 md:h-12 lg:w-28 lg:h-16 xl:w-32  xl:h-20 cursor-pointer">
              <Image
                src={Bitcoin}
                alt=""
                className="object-contain w-8 md:w-6 lg:w-8 xl:w-10"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:items-end md:justify-end gap-4 sm:gap-12 md:gap-4 lg:gap-8 pt-16 md:pt-0">
          <div className="relative cursor-pointer">
            <Image
              src={Facebook}
              alt=""
              className="object-contain w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={Instagram}
              alt=""
              className="object-contain w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={Youtube}
              alt=""
              className="object-contain w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={XTwitter}
              alt=""
              className="object-contain w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={Linkedin}
              alt=""
              className="object-contain w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
