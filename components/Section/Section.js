import React from "react";
import Image from "next/image";
import homeIc from "../../assets/image/icon1.png";
import nearIc from "../../assets/image/icon2.png";
import priceIc from "../../assets/image/icon3.png";

const Section = () => {
  return (
    <div className="w-full px-20 h-[500px] flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#333333] font-semibold text-[40px] tracking-wider w-64 leading-[140%]">
          What We Do For You
        </div>

        {/* <div className="flex justify-between flex-wrap w-[850px]"> */}
          <div className="flex flex-col w-[202px] p-4">
            <div className="flex flex-auto">
              <Image src={homeIc} alt="Line Vektor" />
            </div>
            <div className="font-semibold text-xl tracking-wider leading-[160%] mt-6">
              Occupancy
            </div>
            <div className="text-sm text-[#777777] mt-4">
              Looking for housing according to your wishes with the best.
            </div>
          </div>

          <div className="flex flex-col w-[202px] p-4">
            <div className="flex flex-auto">
              <Image src={nearIc} alt="Line Vektor" />
            </div>
            <div className="font-semibold text-xl tracking-wider leading-[160%] mt-6">
              Near
            </div>
            <div className="text-sm text-[#777777] mt-4">
              The location we provide is close to public facilities and easy
              access for you
            </div>
          </div>

          <div className="flex flex-col w-[202px] p-4">
            <div className="flex flex-auto">
              <Image src={priceIc} alt="Line Vektor" />
            </div>
            <div className="font-semibold text-xl tracking-wider leading-[160%] mt-6">
              Price
            </div>
            <div className="text-sm text-[#777777] mt-4">
              The best price for you and will go up over time like a rocket
            </div>
          </div>
          
        </div>
      </div>
    // </div>
  );
};

export default Section;
