import React from "react";
import Image from "next/image";
import img1 from "../../assets/image/Pict.png";
import homeIc from "../../assets/image/icon1.png";

const JustArrived = () => {
  return (
    <section className="w-full flex items-center">
      <div className="w-1/2">
        <Image src={img1} alt="Line Vektor" />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col items-center pl-20 pr-48">

          <div className="text-[40px] font-semibold leading-[160%] tracking-wider text-[#333333] pb-4">
            We make it easy for customers
          </div>

          <div className="flex flex-col pr-20">
            <div className="flex flex-row relative mt-10">
              <div className="top-1">
                <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="flex flex-col w-full ml-9">
                  <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333]">
                    Choose Your Dream Residence
                  </div>
                  <div className="text-sm tracking-[4%] text-[#777777] mt-3">
                    Choose your dream house by choosing the type and location,
                    we will find the best location for you.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row relative mt-10">
              <div className="top-1">
                <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="flex flex-col w-full ml-9">
                  <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333] pr-32">
                    Make Your Order
                  </div>
                  <div className="text-sm tracking-[4%] text-[#777777] mt-3">
                    Make an Order ASAP if you want it, because our customers
                    will definitely be scrambling to get the best place.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row relative mt-10">
              <div className="top-1">
                <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="flex flex-col w-full ml-9">
                  <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333] pr-28">
                    We Process Your Order
                  </div>
                  <div className="text-sm tracking-[4%] text-[#777777] mt-3">
                    We will process your order, and prepare whatever is needed
                    as soon as you press the button.
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex mt-10">
              <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
              <div className="flex flex-col w-full">
                <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333]">
                  We Process Your Order
                </div>
                <div className="text-sm tracking-[4%] text-[#777777] mt-3">
                  We will process your order, and prepare whatever is needed as
                  soon as you press the button.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustArrived;
