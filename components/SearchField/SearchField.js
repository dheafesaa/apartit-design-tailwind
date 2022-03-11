import React from "react";

const SearchField = () => {
  return (
    <div className="w-full bg-[#FAFAFB] py-32">
      <div className="flex flex-col">
        <div className="font-semibold text-[40px] tracking-wider text-center text-[#333333]">
          Ready To Get Started?
        </div>
        <div className="text-sm text-center tracking-wider text-[#777777] mt-5">
          Join membership and connect every member
        </div>
        <div className="flex items-center justify-center mt-16">
          <div className="flex drop-shadow-xl bg-white">
            <input type="text" className="px-4 py-2 w-80 font-medium text-sm tracking-wider leading-[160%]" placeholder="Enter Your Email" />
            <button className="py-3 px-6 text-white bg-[#FC650B] font-semibold text-base tracking-wider leading-[160%]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
