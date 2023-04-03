import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      icon: "bi bi-house-door-fill",
      path: "/"

    },
    {
      name: "Video",
      icon: "bi bi-camera-video",
      path: "/videos"

    },
    {
      name: "Upload",
      icon: "bi bi-plus-circle",
      path: "/upload  "
    },
    {
      name: "Chat",
      icon: "bi bi-chat-dots",
      path: "/chat"
    },
    {
      name: "Profile",
      icon: "bi bi-person-circle",
      path: "/profile"
    },
    {
      name: "Search",
      icon: "bi bi-search",
      path: "/search  "
    },
    {
      name: "Settings",
      icon: "bi bi-gear",
      path: "/settings"
    }
  ];
  return (
    <nav className="fixed w-full bottom-0 h-16 max-sm:text-sm border-t-2 border-black/30 bg-black/40 rounded-t-2xl flex justify-center items-center text-white/80">
      <ul className="flex justify-between items-center  gap-3">
        {navItems.map((a: { name: string, path: string, icon: string }) => {
          return (
            <li>
              <NavLink  to={a.path}>
                <i title={`${a.name}`}
                 className={`mr-[25px] text-3xl ${a.icon}`}></i>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
