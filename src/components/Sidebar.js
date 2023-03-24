import React from "react";
import { sidebarItems } from "../utils/constants";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.id} className="py-2 mb-4 flex items-center">
            <item.iconName className="text-xl" />
            <span className="ml-4 text-sm">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
