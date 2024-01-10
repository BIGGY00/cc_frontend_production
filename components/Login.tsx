/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Close from "@/assets/icons/Close.svg";
import { useRouter } from "next/navigation";
import { login, getCurrentUser } from "@/services/auth.service";

interface LoginProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      await login(email, password);

      // Checking access 0 == admin, 1 == user
      const response = getCurrentUser();
      if (response.access === 0 || response.access === 1) {
        // Call the onLoginSuccess callback to handle successful login
        onLoginSuccess();
      } else {
        console.log("Cannot check your role!");
      }
    } catch (error) {
      console.error("Login fail")
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center overflow-hidden text-black">
      <div className="p-6 md:p-8 xl:p-10 bg-white flex flex-col w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-2xl gap-4 md:gap-5 xl:gap-6">
        <div className="flex justify-end">
          <Image
            className="cursor-pointer"
            onClick={onClose}
            width={24}
            height={24}
            src={Close}
            alt="Close"
          />
        </div>
        <p className="flex items-center justify-center text-2xl md:text-2xl lg:text-5xl font-semibold">
          Log In
        </p>
        {/* Email input */}
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-lg md:text-xl xl:text-2xl">Email</p>
          <input
            type="text"
            className="w-full p-1 md:p-2 xl:p-4 border border-black rounded-lg"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* Password input */}
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-lg md:text-xl xl:text-2xl">Password</p>
          <input
            type="password"
            className="w-full p-1 md:p-2 xl:p-4 border border-black rounded-lg"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* Login button */}
        <div
          className="w-full flex items-center justify-center py-2 md:py-3 xl:py-5 text-lg md:text-xl xl:text-2xl text-white bg-[#05BE70] rounded-2xl cursor-pointer"
          onClick={handleLogin}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default Login;
