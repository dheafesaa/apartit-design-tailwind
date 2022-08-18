import React from "react";
import Image from "next/image";
import img1 from "../../assets/image/Pict.png";
import homeIc from "../../assets/image/icon1.png";

const JustArrived = () => {
  return (
    <section className="px-6 md:px-12 xl:px-0">
      <div className="flex flex-wrap sm:items-center justify-between">
        <div className="lg:hidden block w-60 md:w-3/5 text-[#333333] font-semibold text-[1.75rem] sm:text-[2.5rem] tracking-wider leading-[140%] text-center lg:text-left mx-auto lg:mx-0">
          We Make it Easy For Customers
        </div>
        <div className="flex flex-wrap lg:justify-between w-full">
          <div className="w-full lg:w-1/2">
            <Image src={img1} alt="Line Vektor" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap lg:flex-col lg:px-20 md:justify-between lg:justify-center">
            <div className="w-full hidden lg:block text-[#333333] font-semibold text-[1.75rem] sm:text-[2.5rem] tracking-wider leading-[140%] text-center lg:text-left mx-auto lg:mx-0">
              We Make it Easy For Customers
            </div>
            <div className="flex flex-wrap lg:flex-col md:justify-between py-9">
              <div className="lg:w-80 md:w-72 py-6 lg:px-0.5">
                <div className="flex">
                  <div className="w-24 mr-2 md:mr-6 flex items-start">
                    <Image src={homeIc} alt="Line Vektor" />
                  </div>
                  <div className="pl-4 pr-4 md:pl-0 md:pr-0">
                    <div className="font-semibold text-lg tracking-wider leading-[160%] ">
                      Choose Your Dream Residence
                    </div>
                    <div className="text-sm text-[#777777] mt-2.5">
                      Choose your dream house by choosing the type and location.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 md:w-72 py-6 lg:px-0.5">
                <div className="flex">
                  <div className="w-24 mr-2 md:mr-6 flex items-start">
                    <Image src={homeIc} alt="Line Vektor" />
                  </div>
                  <div className="pl-4 pr-4 md:pl-0 md:pr-0">
                    <div className="font-semibold text-lg tracking-wider leading-[160%]">
                      Make Your Order
                    </div>
                    <div className="text-sm text-[#777777] mt-2.5">
                      Make an Order ASAP if you want it, because our customers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-80 md:w-72 py-6 lg:px-0.5">
                <div className="flex">
                  <div className="w-24 mr-2 md:mr-6 flex items-start">
                    <Image src={homeIc} alt="Line Vektor" />
                  </div>
                  <div className="pl-4 pr-4 md:pl-0 md:pr-0">
                    <div className="font-semibold text-lg tracking-wider leading-[160%]">
                      We Process Your Order
                    </div>
                    <div className="text-sm text-[#777777] mt-2.5">
                      We will process your order, and prepare whatever is
                      needed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="w-full flex items-center">
    //   <div className="w-1/2">
    //     <Image src={img1} alt="Line Vektor" />
    //   </div>
    //   <div className="w-1/2">
    //     <div className="flex flex-col items-center pl-20 pr-48">

    //       <div className="text-[40px] font-semibold leading-[160%] tracking-wider text-[#333333] pb-4">
    //         We make it easy for customers
    //       </div>

    //       <div className="flex flex-col pr-20">
    //         <div className="flex flex-row relative mt-10">
    //           <div className="top-1">
    //             <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
    //           </div>
    //           <div className="flex flex-col w-full items-center">
    //             <div className="flex flex-col w-full ml-9">
    //               <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333]">
    //                 Choose Your Dream Residence
    //               </div>
    //               <div className="text-sm tracking-[4%] text-[#777777] mt-3">
    //                 Choose your dream house by choosing the type and location,
    //                 we will find the best location for you.
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-row relative mt-10">
    //           <div className="top-1">
    //             <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
    //           </div>
    //           <div className="flex flex-col w-full items-center">
    //             <div className="flex flex-col w-full ml-9">
    //               <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333] pr-32">
    //                 Make Your Order
    //               </div>
    //               <div className="text-sm tracking-[4%] text-[#777777] mt-3">
    //                 Make an Order ASAP if you want it, because our customers
    //                 will definitely be scrambling to get the best place.
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-row relative mt-10">
    //           <div className="top-1">
    //             <Image src={homeIc} alt="Line Vektor" width={47} height={47} />
    //           </div>
    //           <div className="flex flex-col w-full items-center">
    //             <div className="flex flex-col w-full ml-9">
    //               <div className="font-medium text-xl leading-[160%] tracking-wider text-[#333333] pr-28">
    //                 We Process Your Order
    //               </div>
    //               <div className="text-sm tracking-[4%] text-[#777777] mt-3">
    //                 We will process your order, and prepare whatever is needed
    //                 as soon as you press the button.
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default JustArrived;
