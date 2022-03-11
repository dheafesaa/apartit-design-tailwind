import React from "react";
import Image from "next/image";
import cs1 from "../../assets/image/cs1.png";
import cs2 from "../../assets/image/cs2.png";
import cs3 from "../../assets/image/cs3.png";
import cs4 from "../../assets/image/cs4.png";

const Story = () => {
  return (
    <section className="w-full px-20">
      <div className="flex flex-col container mx-auto pb-32">
        <div className="font-semibold text-[40px] text-[#333333] leading-[4rem] tracking-[4%]">
          Our Client Story
        </div>
        <div className="flex flex-row justify-between mt-6">
          
          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={cs1} />
              <div className="text-[#333333] text-xl tracking-wider font-semibold mt-4 w-64">
                Help us find a nice Apartment
              </div>
              <div className="text-[#777777] text-sm tracking-wider w-64 mt-3">
                We found a good quality apartment for the price and close to
                public facilities.
              </div>
              <div className="font-semibold text-sm tracking-wider text-[#FC650B] mt-4">
                Read more
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={cs2} />
              <div className="text-[#333333] text-xl tracking-wider font-semibold mt-4 w-64">
                I got a comfortable boarding room
              </div>
              <div className="text-[#777777] text-sm tracking-wider w-64 mt-3">
                The boarding room is comfortable and quiet, but not far from
                public facilities, very good for students.
              </div>
              <div className="font-semibold text-sm tracking-wider text-[#FC650B] mt-4">
                Read more
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={cs3} />
              <div className="text-[#333333] text-xl tracking-wider font-semibold mt-4 w-64">
                Cheap and luxurious villas that we get
              </div>
              <div className="text-[#777777] text-sm tracking-wider w-64 mt-3">
                The villa is luxurious and very quiet with a swimming pool and
                we really like it, at a reasonable price.
              </div>
              <div className="font-semibold text-sm tracking-wider text-[#FC650B] mt-4">
                Read more
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6">
            <div className="flex flex-col box-content card relative">
              <Image src={cs4} />
              <div className="text-[#333333] text-xl tracking-wider font-semibold mt-4 w-64">
                The apartment here is very nice
              </div>
              <div className="text-[#777777] text-sm tracking-wider w-64 mt-3">
                The apartment that I found here is very good, I like it apartit
                very reliable.
              </div>
              <div className="font-semibold text-sm tracking-wider text-[#FC650B] mt-4">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
