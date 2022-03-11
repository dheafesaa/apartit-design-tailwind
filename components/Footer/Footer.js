import React from "react";
import Image from "next/image";
import logoApertit from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="p-6 px-20 w-full pt-32">
      <div className="container flex justify-between mx-auto">

        <div className="flex flex-col">

          <div className="flex flex-row">
            <Image src={logoApertit} alt="Logo of Apertit" />
            <div className="flex flex-row text-[22px] font-semibold tracking-wider">
              <div className="text-[#FC650B] pl-2">Apart</div>
              <div className="text-black">it.</div>
            </div>
            
          </div>

          <div className="flex flex-col text-sm text-coolGray-600 mt-6">
            <div className="text-sm text-[#777777] tracking-wider">
              2118 Thornridge Cir. Syracuse, <br />
              Connecticut 35624
            </div>
            <div className="text-[#333333] text-base tracking-wider mt-6">
              (480) 555-0103
            </div>
            <div className="text-[#333333] text-base tracking-wider mt-6">
              apartIt@Internationale.org
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-between w-7/12">

          <div className="flex flex-col">
            <h2 className="font-semibold tracking-wider text-[#333333]">
              Categories
            </h2>
            <div className="flex flex-col text-sm text-[#777777] tracking-wider mt-8">
              <div className="mt-4">Boarding House </div>
              <div className="mt-4">Apartment </div>
              <div className="mt-4">Villa</div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold tracking-wider text-[#333333]">
              About
            </h2>
            <div className="flex flex-col text-sm text-[#777777] tracking-wider mt-8">
              <div className="mt-4">Project Management </div>
              <div className="mt-4">Partnership </div>
              <div className="mt-4">The Team</div>
              <div className="mt-4">About Us </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold tracking-wider text-[#333333]">
              Follow Us
            </h2>
            <div className="flex flex-col text-sm text-[#777777] tracking-wider mt-8">
              <div className="mt-4">Facebook </div>
              <div className="mt-4">Instagram </div>
              <div className="mt-4">Twitter </div>
              <div className="mt-4">LinkedIn </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold tracking-wider text-[#333333]">
              Help
            </h2>
            <div className="flex flex-col text-sm text-[#777777] tracking-wider mt-8">
              <div className="mt-4">Legal notice </div>
              <div className="mt-4">FAQ </div>
              <div className="mt-4">CGV </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex items-center justify-center pt-16">
        <span className="text-[#777777] text-sm tracking-wider">
          Copyright©2022. Apartit Comfortable Residence.
        </span>
      </div>

    </footer>
  );
};

export default Footer;
