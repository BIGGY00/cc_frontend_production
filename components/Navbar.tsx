"use client";
import React, { useState } from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Logo from "@/assets/photos/Logo.png";
import useOpenLogin from "@/utils/useOpenLogin";
import useOpenSignup from "@/utils/useOpenSignup";
import BurgerMenu from "@/assets/icons/Burger-Menu.svg";

export interface NavbarProps {
  refName: string;
  ref: React.RefObject<HTMLDivElement>;
}

const Navbar = (props: { navProps: NavbarProps[] }) => {
  const { navProps } = props;

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleScrollForMobile = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    handleMenuClicked();
  };
  const { openLogin, setOpenLogin } = useOpenLogin();
  const { openSignup, setOpenSignup } = useOpenSignup();
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenLogin = (): void => {
    setOpenLogin(!openLogin);
    console.log("Navbar openLogin Clicked", openLogin);
  };
  const handleOpenSignup = (): void => {
    setOpenSignup(!openSignup);
  };
  const handleOpenLoginForMobile = (): void => {
    setOpenLogin(!openLogin);
    handleMenuClicked();
  };
  const handleOpenSignupForMobile = (): void => {
    setOpenSignup(!openSignup);
    handleMenuClicked();
  };
  const handleMenuClicked = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="h-[6vh] md:h-24 w-5/6 mx-auto sm:w-full sm:mx-0 flex flex-row justify-between items-center  sm:px-12 md:px-14 lg:px-20 xl:px-28 text-sm md:text-base">
      <div className="flex justify-center items-center cursor-pointer gap-2 md:gap-4 xl:gap-6">
        <div className="relative">
          <Image
            alt=""
            src={Logo}
            className="md:object-contain w-6 md:w-8 lg:w-10"
          />
        </div>
        <div className="flex md:text-lg font-semibold">CARBON COIN</div>
      </div>
      {/* Navbar items for mobile */}
      <div className="flex sm:hidden">
        <div className="relative">
          <Image
            alt=""
            src={BurgerMenu}
            className="md:object-contain w-6 md:w-8 lg:w-10"
            onClick={handleMenuClicked}
          />
        </div>
      </div>
      {openMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50">
          <div className="flex flex-col z-40 gap-5 p-8 drop-shadow-lg bg-[#049a5b] w-fit h-full">
            <div className="w-full flex justify-end ">
              <svg
                className="fill-current h-4 w-4 cursor-pointer"
                onClick={handleMenuClicked}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12.381l-6.416 6.416-1.414-1.414 6.416-6.416-6.416-6.416 1.414-1.414 6.416 6.416 6.416-6.416 1.414 1.414-6.416 6.416 6.416 6.416-1.414 1.414-6.416-6.416-6.416 6.416-1.414-1.414 6.416-6.416z" />
              </svg>
            </div>
            {navProps.map((item) => (
              <Navlink
                key={item.refName}
                name={item.refName}
                clicked={() => handleScrollForMobile(item.ref)}
              />
            ))}

            <Navlink name="Login" clicked={handleOpenLoginForMobile} />
            <Navlink name="Register" clicked={handleOpenSignupForMobile} />
          </div>
        </div>
      )}

      {/* Navbar items for PC */}
      <div className="hidden sm:flex items-center justify-between gap-2 lg:gap-8 xl:gap-14">
        {navProps.map((item) => (
          <Navlink
            key={item.refName}
            name={item.refName}
            clicked={() => handleScroll(item.ref)}
          />
        ))}

        <div className="flex items-center gap-2 md:gap-4 lg:gap-8 xl:gap-14 ">
          <Navlink name="Login" clicked={handleOpenLogin} />
          <p className="font-extralight">|</p>
          <div
            className="transition duration-100 ease-in-out cursor-pointer py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 bg-[#05BE70] rounded-full hover:text-black font-bold hover:bg-white"
            onClick={handleOpenSignup}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
