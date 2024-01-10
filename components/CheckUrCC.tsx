"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tree from "@/assets/photos/Tree.png";
import Arrow from "@/assets/photos/Arrow.png";
import CarbonCoin from "@/assets/photos/Carbon-coin.png";
enum UnitType {
  Acres = "Acres",
  Hectares = "Hectares",
  SquareMeters = "Square Meters",
  SquareFeet = "Square Feet",
  SquareKilometers = "Square Kilometers",
}

const CheckUrCC = () => {
  const [unitType, setUnitType] = useState<UnitType>(UnitType.Acres);
  const [carbonCoin, setCarbonCoin] = useState(0);
  const [treeSpace, setTreeSpace] = useState("");
  const [treeSpaceValue, setTreeSpaceValue] = useState(0);
  const handleCalClicked = () => {
    let conversionRate = 1;

    if (unitType === UnitType.Hectares) {
      conversionRate = 2.47105; // 1 acre = 2.47105 hectares
    } else if (unitType === UnitType.SquareMeters) {
      conversionRate = 4046.86; // 1 acre = 4046.86 square meters
    } else if (unitType === UnitType.SquareFeet) {
      conversionRate = 43560; // 1 acre = 43560 square feet
    } else if (unitType === UnitType.SquareKilometers) {
      conversionRate = 0.00404686; // 1 acre = 0.00404686 square kilometers
    }
    console.log("unitType", unitType);
    console.log("conversionRate", conversionRate);
    let numberOfAcres = 0;
    if (treeSpace) numberOfAcres = treeSpaceValue / conversionRate;
    const carbonCreditValue = numberOfAcres * 3;
    setCarbonCoin(carbonCreditValue);
  };
  return (
    // <div className="flex flex-col w-full h-[1200px] items-center justify-center">
    <div className="relative flex flex-col w-full h-[900px] md:h-[1200px] lg:h-[1400px] items-center ">
      <div className="flex flex-col items-center justify-center gap-8 h-[800px] w-full">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Check Your Carbon Credits
        </div>
        <div className="text-sm lg:text-base text-center mx-4">
          Determine your potential carbon credits by entering your tree space
          units below:
        </div>
      </div>
      {/* <div className="flex flex-col w-full h-full bg-white px-64 items-center text-black gap-24 "> */}
      <div
        className="absolute top-0 translate-y-[340px] flex flex-col w-auto lg:w-[950px] sm:h-[220px] md:h-[260px] lg:h-[370px] p-4 md:p-8 lg:p-16 justify-between rounded-2xl bg-white text-black drop-shadow-2xl 
      mx-4 gap-6 sm:gap-0"
      >
        <div className="flex flex-col sm:flex-row h-fit w-full items-center justify-between gap-3 md:gap-6 lg:gap-12 ">
          <input
            type="number"
            id="treeSpace"
            name="treeSpace"
            value={treeSpace}
            placeholder="Enter your tree space"
            onChange={(e) => {
              setTreeSpace(e.target.value);
              setTreeSpaceValue(+e.target.value);
            }}
            className="w-full sm:w-1/2 p-1 md:p-2 font-semibold text-sm md:text-base"
          />
          <div className="flex flex-row items-center w-full sm:w-1/2 gap-3 sm:gap-6 md:gap-12">
            <select
              id="unitType"
              name="unitType"
              value={unitType}
              onChange={(e) => setUnitType(e.target.value as UnitType)}
              className="p-1 md:p-2 text-sm md:text-base border rounded-md cursor-pointer w-full font-semibold"
            >
              <option value={UnitType.Acres}>Acres</option>
              <option value={UnitType.Hectares}>Hectares</option>
              <option value={UnitType.SquareMeters}>Square Meters</option>
              <option value={UnitType.SquareFeet}>Square Feet</option>
              <option value={UnitType.SquareKilometers}>
                Square Kilometers
              </option>
            </select>
            <button
              className="text-xs px-1 py-1 md:text-sm  md:px-2 md:py-2 lg:text-base lg:px-6 lg:py-4 rounded-full bg-[#05BE70] text-white font-bold hover:text-[#05BE70] hover:bg-white border hover:border-[#05BE70] hover:underline"
              onClick={handleCalClicked}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 md:gap-4">
          <div className="uppercase text-[#05BE70] font-semibold text-sm lg:text-base">
            ESTIMATED CARBON COIN EARNINGS:
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="text-black font-bold text-xl lg:text-4xl tracking-wider">
              <span>{carbonCoin.toFixed(4)}</span>
              <span> Carbon Coins</span>
              <span> {"("}</span>
              <span>{(carbonCoin.toFixed(4) as any) * 15} </span>
              <span>USD</span>
              <span>{")"}</span>
            </div>
            <div className="text-[#828282] text-sm lg:text-base">
              Earnings may vary based on environmental factors and market
              conditions.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-full w-full gap-4 md:gap-8 lg:gap-16 items-center justify-center bg-white pt-48 md:pt-64 lg:pt-72 px-4">
        <div className="relative">
          <Image
            src={Tree}
            alt=""
            className="w-[125px] sm:w-[200px] md:w-[400px] sm:h-[200px] md:h-[400px] object-contain"
          />
        </div>
        <div className="relative">
          <Image
            src={Arrow}
            alt=""
            className="w-[48px] sm:w-[72px] h-auto md:w-[130px] md:h-[84px] object-contain"
          />
        </div>
        <div className="relative">
          <Image
            src={CarbonCoin}
            alt=""
            className="w-[125px] sm:w-[200px] md:w-[400px] sm:h-[200px] md:h-[400px] object-contain"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CheckUrCC;
