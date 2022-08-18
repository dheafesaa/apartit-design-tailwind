import React from "react";
import Image from "next/image";
import homeIc from "../../assets/image/icon1.png";
import nearIc from "../../assets/image/icon2.png";
import priceIc from "../../assets/image/icon3.png";

const Section = () => {
  return (
    <section className="px-6 md:px-12 xl:px-20 py-36 flex items-center">
      <div className="flex w-full flex-wrap sm:items-center justify-between">
        <div className="lg:w-64 text-[#333333] font-semibold text-[1.75rem] sm:text-[2.5rem] tracking-wider leading-[140%] text-center lg:text-left mx-auto lg:mx-0">
          What We Do <span className="block">For You</span>
        </div>
        <div className="w-full lg:w-[850px] flex flex-wrap items-center md:justify-between">
          <div className="lg:w-52 md:w-72 py-6 lg:px-5">
            <div className="flex lg:flex-col">
              <div className="w-24 mr-2 md:mr-6 flex items-start">
                <Image src={homeIc} alt="Line Vektor" />
              </div>
              <div className="pl-6 pr-14 md:pl-0 md:pr-0">
                <div className="font-semibold text-xl tracking-wider leading-[160%] ">
                  Occupancy
                </div>
                <div className="text-sm text-[#777777] mt-3">
                  Looking for housing according to your wishes with the best.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-52 md:w-72 py-6 lg:px-5">
            <div className="flex lg:flex-col">
              <div className="w-24 mr-2 md:mr-6 flex items-start">
                <Image src={nearIc} alt="Line Vektor" />
              </div>
              <div className="pl-6 pr-14 md:pl-0 md:pr-0">
                <div className="font-semibold text-xl tracking-wider leading-[160%] ">
                  Near
                </div>
                <div className="text-sm text-[#777777] mt-3">
                  The location we provide is close to public facilities and
                  easy.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-52 md:w-72 py-6 lg:px-5">
            <div className="flex lg:flex-col">
              <div className="w-24 mr-2 md:mr-6 flex items-start">
                <Image src={priceIc} alt="Line Vektor" />
              </div>
              <div className="pl-6 pr-14 md:pl-0 md:pr-0">
                <div className="font-semibold text-xl tracking-wider leading-[160%] ">
                  Price
                </div>
                <div className="text-sm text-[#777777] mt-3">
                  The best price for you and will go up over time like a rocket.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* <div className="w-full px-20 h-[500px] flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row md:justify-between items-center">
          <div className="text-[#333333] font-semibold text-[40px] tracking-wider w-64 leading-[140%]">
            What We Do For You
          </div>

          <div className="flex justify-between flex-wrap w-[850px]">
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
      </div> */
  );
};

export default Section;
