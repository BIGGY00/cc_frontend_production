/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import WelcomePage from "../../components/WelcomePage";
import WhyCarbonPage from "../../components/WhyCarbonPage";
import CheckUrCC from "../../components/CheckUrCC";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import Login from "../../components/Login";
import useOpenLogin from "../../utils/useOpenLogin";
import useOpenSignup from "../../utils/useOpenSignup";
import Navbar, { NavbarProps } from "../../components/Navbar";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const { openLogin, setOpenLogin } = useOpenLogin();
  const { openSignup, setOpenSignup } = useOpenSignup();
  
  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };

  const handleOpenSignup = () => {
    setOpenSignup(!openSignup);
  };

  const handleLoginSuccess = () => {
    router.push("/Transfer");
  };

  const productRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  const navProps: NavbarProps[] = [
    { refName: "Products", ref: productRef },
    { refName: "Features", ref: featureRef },
    { refName: "About", ref: aboutRef },
    { refName: "Contact", ref: contactRef },
  ];

  return (
    <div>
      <div className="sticky z-50">
        <Navbar navProps={navProps} />
      </div>
      <div ref={productRef}>
        <WelcomePage />
      </div>
      <div ref={aboutRef}>
        <WhyCarbonPage />
      </div>
      <div ref={featureRef}>
        <CheckUrCC />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
      {openSignup && <Signup onClose={handleOpenSignup} />}
      {openLogin && <Login onClose={handleOpenLogin} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default page;
