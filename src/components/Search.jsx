import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div>
      <div className="w-full flex items-center relative">
        <MagnifyingGlassIcon className="ml-4 h-6 w-6 absolute cursor-pointer text-[#919191]" />
        <input
          type="text"
          className="font-mono placeholder:font-mono border-none shadow-sm w-full outline-none rounded-3xl pl-14 pr-6 py-[10px] text-[16px]"
          placeholder="Search Friends"
        />
      </div>
    </div>
  );
};

export default Search;
