import React, { useContext } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const contextData = useContext(AuthContext)

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="h-[80px] w-[80px] rounded-full">
          <img src={contextData?.photoURL} alt="" className="rounded-full h-[80px] w-[80px] object-cover" />
        </div>
        <div>
          <h3 className="text-[#4A79F7] text-xl font-semibold font-mono leading-6">{contextData?.displayName}</h3>
        </div>
      </div>
      <div>
        <ArrowLeftOnRectangleIcon className="h-6 w-6 cursor-pointer" onClick={() => signOut(auth)} />
      </div>
    </div>
  );
};

export default User;
