import React from "react";
import Image from "next/image";
import jakarta from "../../assets/image/jkt.png";
import bandung from "../../assets/image/bdg.png";
import bali from "../../assets/image/bali.png";
import jogja from "../../assets/image/jgja.png";

const MostSearched = () => {
  return (
    <section className="w-full px-20">
      <div className="flex flex-col container mx-auto pb-32">
        <div className="font-semibold text-[40px] text-[#333333] leading-[4rem] tracking-[4%] text-center">
          Most Searched <br /> Locations
        </div>
        <div className="flex flex-row justify-between mt-6">

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={jakarta} />
              <div className="text-[#333333] text-xl tracking-wider mt-7">
                Jakarta
              </div>
              <div className="mt-2 text-[#777777] text-sm tracking-wider">
                480+ Residences
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={bandung} />
              <div className="text-[#333333] text-xl tracking-wider mt-7">
                Bandung
              </div>
              <div className="mt-2 text-[#777777] text-sm tracking-wider">
                380+ Residences
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={bali} />
              <div className="text-[#333333] text-xl tracking-wider mt-7">
                Denpasar
              </div>
              <div className="mt-2 text-[#777777] text-sm tracking-wider">
                330+ Residences
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={jogja} />
              <div className="text-[#333333] text-xl tracking-wider mt-7">
                Yogyakarta
              </div>
              <div className="mt-2 text-[#777777] text-sm tracking-wider">
                450+ Residences
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MostSearched;
