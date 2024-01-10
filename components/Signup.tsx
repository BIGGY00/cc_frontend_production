import Image from "next/image";
import React, { useState } from "react";
import Close from "@/assets/icons/Close.svg";
import { useRouter } from "next/navigation";
import { register, } from "@/services/auth.service";import { access } from "fs";
;
interface SignupProps {
  onClose: () => void;
}

const Signup = ({ onClose }: SignupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    setMessage("");
    setLoading(true);

    const status = 1;
    const access = 1;

    await register(name, email, password, status, access).then(
      () => {
        router.push("/");
      }
    )
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-black">
      <div className="p-6 md:p-7 xl:p-8 bg-white flex flex-col w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-2xl gap-4 ">
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
        <p
          className="flex items-center justify-center text-2xl md:text-2xl lg:text-5xl font-semibold"
          onClick={handleSignup}
        >
          Sign Up Now !!!
        </p>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-lg md:text-xl xl:text-2xl">Name</p>
          <input
            type="text"
            className="w-full  p-1 md:p-2 xl:p-3 border border-black rounded-lg"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-lg md:text-xl xl:text-2xl">Email</p>
          <input
            type="email"
            className="w-full  p-1 md:p-2 xl:p-3 border border-black rounded-lg"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-lg md:text-xl xl:text-2xl">Password</p>
          <input
            type="password"
            className="w-full  p-1 md:p-2 xl:p-3 border border-black rounded-lg"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div
          className="w-full item-center justify-center flex py-2 md:py-3 xl:py-5 text-lg md:text-xl xl:text-2xl text-white bg-[#05BE70] rounded-2xl cursor-pointer"
          onClick={handleSignup}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Signup;
