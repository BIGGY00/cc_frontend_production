"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../../components/utils/constants";
import Loader from "../../../components/Loader";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { getCurrentUser, logout } from "../../../services/auth.service";
import { useRouter } from "next/navigation";
import { Signer } from "ethers";
import Logo from "@/assets/photos/Logo.png";
import Image from "next/image";
const Transfer = () => {
  const [userRole, setUserRole] = useState("");
  const [address, setaddress] = useState("");
  const [amount, setamount] = useState(0);
  const [wallet, setWallet] = useState("");
  const [signer, setSigner] = useState<Signer | undefined>(() => undefined);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const ContractAddress = contractAddress;
      const abi = contractABI;
      const contract = new ethers.Contract(ContractAddress, abi, signer);
      try {
        await contract.transfer(address, amount);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  async function mint() {
    if (typeof window.ethereum !== "undefined") {
      const ContractAddress = contractAddress;
      const abi = contractABI;
      const contract = new ethers.Contract(ContractAddress, abi, signer);
      try {
        await contract.minttoken(address, amount);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const user = provider.getSigner() as Signer;
    setSigner(() => user);
    getCurrentWalletConnected();
    addWalletListener();
  }, [wallet]);

  const handleSubmit = (e: any) => {
    execute();
    e.preventDefault();
  };

  const mintfs = () => {
    mint();
  };

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          console.log(accounts[0]);
          return true; // Wallet is connected
        } else {
          console.log("Connect to MetaMask using the Connect button");
          return false; // Wallet is not connected
        }
      } catch (err: any) {
        console.error(err.message);
        return false; // Wallet is not connected (error case)
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
      return false; // Wallet is not connected
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        setWallet(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWallet("");
      console.log("Please install MetaMask");
    }
  };

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(accounts[0]);
        console.log(accounts[0]);
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  useEffect(() => {
    const checkRole = getCurrentUser();

    if (checkRole.access === 0) {
      setUserRole("admin");
    } else if (checkRole.access === 1) {
      setUserRole("user");
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-start w-full">
      {/* Navbar */}
      <div className="flex justify-between items-center py-5 px-6 md:px-12 lg:px-16 w-full">
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
        <button
          type="button"
          onClick={handleLogout}
          className="text-white font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 py-6 px-4">
          <div className="flex flex-1 w-full justify-center items-center flex-col md:mr-10 ">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 text-center font-bold">
              Send Carbon Coin <br /> To others
            </h1>
            <p className="mt-5 text-white font-light md:w-full text-base text-center  ">
              Explore the carboncoin. Transfer to others easily.
            </p>
            {wallet && wallet.length > 0 ? null : (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#05BE70] rounded-full font-bold hover:bg-white cursor-pointer p-3 group"
              >
                <AiFillPlayCircle className="text-white mr-2 group-hover:text-black" />
                <p className="text-white text-base font-semibold group-hover:text-black">
                  Connect Wallet
                </p>
              </button>
            )}
          </div>
          {/* <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button> */}
          {/* {!getCurrentWalletConnected && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )} */}

          {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div> */}

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism bg-[#05BE70]">
              <div className="flex justify-between flex-col w-full h-full rounded">
                <div className="flex justify-between items-start ">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <FaWallet fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="underline font-semibold text-[#000] text-lg">
                    {wallet && wallet.length > 0
                      ? `Connected: ${wallet.substring(
                          0,
                          6
                        )}...${wallet.substring(38)}`
                      : "Please connect the wallet"}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Carbon Coin
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <input
                placeholder="Address To"
                name="addressTo"
                type="text"
                onChange={(e) => setaddress(e.target.value)}
                className="my-2 w-full rounded-md p-2 outline-none  text-black border border-white text-md white-glassmorphism"
              />
              <input
                placeholder="Amount (CC)"
                name="amount"
                type="number"
                onChange={(e: any) => setamount(e.target.value)}
                className="my-2 w-full rounded-md p-2 outline-none  text-black border border-white text-md white-glassmorphism"
              />
              {/* <div className="h-[1px] w-full bg-gray-400 my-2" /> */}
              <div className="py-2 w-full items-center justify-center">
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 p-2 bg-[#05BE70] rounded-full hover:text-black font-bold hover:bg-white cursor-pointer"
                  >
                    Send now
                  </button>
                )}

                {userRole === "admin" && (
                  <div>
                    <div className="flex py-2 text-center items-center justify-center">
                      or
                    </div>
                    <button
                      type="button"
                      onClick={mintfs}
                      className="text-white w-full mt-2 p-2 bg-[#05BE70] rounded-full hover:text-black font-bold hover:bg-white cursor-pointer"
                    >
                      Mint
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
