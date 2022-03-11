import React from "react";
import Image from "next/image";
import dropDown from "../../assets/image/Dropdown.png";

const Search = () => {
  return (
    <div className="flex py-10">
      <div className="bg-white w-10/12 h-20 drop-shadow-lg flex justify-between">
        <div className="flex justify-between w-48 items-center px-6 py-3">
          <div className="text-base font-medium tracking-wider">
            Select Type
          </div>
          <Image src={dropDown} alt="Line Vektor" />
        </div>
        <div className="flex justify-between w-48 items-center px-6 py-3">
          <div className="text-base font-medium tracking-wider">
            Location
          </div>
          <Image src={dropDown} alt="Line Vektor" />
        </div>
        <div className="flex p-4">
          <button className="bg-[#FC650B] px-6 py-3 text-white text-base font-medium tracking-wider">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
