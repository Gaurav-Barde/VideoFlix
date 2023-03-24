import React from "react";
import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <aside className="mr-6">
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
