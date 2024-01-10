import Image from "next/image";
import React from "react";
import PurpleCoin from "@/assets/photos/PurpleCoin.png";
const WhyCarbonPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-[840px] w-full items-center justify-center md:px-24 gap-12 xl:gap-80">
      <div className="w-[240px] xl:w-[420px]">
        <div className="relative">
          <Image src={PurpleCoin} alt="/" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-normal px-12 md:px-0 gap-8 w-[490px]">
        <p className="font-bold text-3xl lg:text-4xl px-8 text-center md:text-left md:px-0">
          Why Carbon Coins System
        </p>
        <p className="text-center md:text-justify px-8 md:px-0">
          Carbon Credit Tokens: Fusing finance and sustainability, our
          innovative system incentivizes eco-friendly practices for a greener,
          more resilient future.
        </p>
        <p className="font-bold px-6 py-4 text-lg bg-[#05BE70] w-fit rounded-full hover:text-black hover:bg-white cursor-pointer">
          Learn More
        </p>
      </div>
    </div>
  );
};

export default WhyCarbonPage;
