import React from "react";
import { Sidebar, Chat, Profile } from "../components";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-[1] md:flex-[0.5] xl:flex-[0.3] bg-[#F9F9F9]">
          <Sidebar />
        </div>
        <div className="hidden md:block md:flex-[0.5] bg-[#FFFEFE]">
          <Chat />
        </div>
        <div className="hidden xl:flex-[0.2] xl:block bg-[#F9F9F9]">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
