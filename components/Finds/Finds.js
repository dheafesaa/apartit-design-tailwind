import React from "react";
import Image from "next/image";
import pict1 from "../../assets/image/pict1.png";
import pict2 from "../../assets/image/pict2.png";

const Finds = () => {
  return (
    <section className="px-20 w-full">
      <div className="flex flex-col container mx-auto py-32">
        <div className="text-[40px] font-semibold racking-wider leading-[160%] text-[#333333]">
          Find What's Right For You
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex pt-6 relative w-[580px] ">
            <Image className="w-full h-full" src={pict1} alt="CatWikiLg" />
            <div className="flex flex-row absolute w-full px-10 self-end justify-between pb-[60px]">
              <div className="text-[28px] font-semibold text-white w-72 tracking-[4%]">
                Exclusive Boarding House For You
              </div>
              <div className="flex py-4">
                <button className="bg-[#FC650B] px-6 py-3 text-white text-base font-semibold tracking-wider">
                  Find More
                </button>
              </div>
            </div>
          </div>
          <div className="flex pt-6 relative w-[580px] ">
            <Image className="w-full h-full" src={pict2} alt="CatWikiLg" />
            <div className="flex flex-row absolute w-full px-10 self-end justify-between pb-16">
              <div className="text-[28px] font-semibold text-white w-72 tracking-[4%]">
              Modern Comfortable Apartment
              </div>
              <div className="flex py-4">
                <button className="bg-[#FC650B] px-6 py-3 text-white text-base font-semibold tracking-wider">
                  Find More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finds;
