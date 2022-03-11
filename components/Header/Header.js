import React from "react";
import Image from "next/image";
import logoApertit from "../../assets/image/logo.png";

const Header = () => {
  return (
    <header className="z-40 px-20 w-full">
      <div className="container mx-auto py-6">
        <div className="flex flex-stretch items-center justify-between">
          <div className="flex flex-row">
            <Image src={logoApertit} alt="Logo of Apertit" />
            <div className="flex flex-row text-[22px] font-semibold tracking-wider">
              <div className="text-[#FC650B] pl-2">Apart</div>
              <div className="text-black">it.</div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-row justify-between w-[716px]">
              <div className="flex justify-between w-[537px] text-sm font-medium tracking-wider items-center">
                <div className="text-[#FC650B]">Home</div>
                <div className="text-[#777777]">About</div>
                <div className="text-[#777777]">How it Works</div>
                <div className="text-[#777777]">FAQ</div>
                <div className="text-[#777777]">Contact US</div>
              </div>
              <div className="bg-[#FC650B] px-4 py-2 text-white font-semibold text-sm tracking-wider">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
