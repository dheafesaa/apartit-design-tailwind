import React from "react";
import Header from "../header/header";
import Image from "next/image";
import lineVektor from "../../assets/image/line.png";
import Search from "../Search/Search";
import Pict from "../../assets/image/Image.png";

const Hero = () => {
  return (
    <section className="bg-[#F9F9FA]">
      <Header />
      <div className="z-40 w-full">
        <div className="flex justify-between">
          <div className="flex flex-col container mx-auto px-20 w-3/4">
            <div className="font-semibold text-6xl tracking-wider leading-[130%] mt-8">
              <div className="text-[#333333]"> Help you Found Suitable Home is</div>
              <div className="text-[#FC650B]">Our Priority.</div>
              <div className="mt-[-3rem]">
                <Image src={lineVektor} alt="Line Vektor" />
              </div>
            </div>
            <div className="text-[#777777] font-medium text-base tracking-wider w-72 mt-5">
              We bring you together with your dream home
            </div>
            <Search />
          </div>
          <div className="mt-4">
            <Image src={Pict} alt="Line Vektor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
