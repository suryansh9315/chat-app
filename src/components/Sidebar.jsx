import React from "react";
import { Friends, Search, User } from "./";

const Sidebar = () => {
  return (
    <div className="flex flex-col px-6 py-10 gap-8">
        <div>
          <User />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Friends />
        </div>
    </div>
  );
};

export default Sidebar;
