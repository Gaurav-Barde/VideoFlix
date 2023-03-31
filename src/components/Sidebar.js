import React from "react";
import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <aside className="mr-6">
      <ul>
        {sidebarItems.map((item) => (
          <Link key={item.id} to="/">
            <li className="py-2 mb-4 flex items-center">
              <item.iconName className="text-xl" />
              <span className="ml-4 text-sm">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
