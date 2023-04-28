import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

const User = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <div className="h-[80px] w-[80px] bg-cover rounded-full bg-login-image"></div>
        <div>
          <h3 className="text-[#4A79F7] text-xl font-semibold font-mono leading-6">Suryansh Sharma</h3>
          <p className="text-[#929292] font-mono text-sm">Senior Developer</p>
        </div>
      </div>
      <div>
        <PencilIcon className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default User;
