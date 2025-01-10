import React from "react";
import { BsGraphUpArrow, BsPersonLinesFill } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white fixed bottom-0 w-full flex justify-around p-2 sm:p-4 shadow-md">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-blue-600 rounded px-2 py-1"
            : "text-blue-600"
        }
      >
        <div className="flex flex-col items-center">
          <GoHome className="h-6 w-6 md:h-8 md:w-8" />
          <p className="text-xs sm:text-sm md:text-base">Dashboard</p>
        </div>
      </NavLink>
      <NavLink
        to="/insights"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-blue-600 rounded px-2 py-1"
            : "text-blue-600"
        }
      >
        <div className="flex flex-col items-center">
          <BsGraphUpArrow className="h-6 w-6 md:h-8 md:w-8" />
          <p className="text-xs sm:text-sm md:text-base">Insights</p>
        </div>
      </NavLink>
      <NavLink
        to="/cashflow"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-blue-600 rounded px-2 py-1"
            : "text-blue-600"
        }
      >
        <div className="flex flex-col items-center">
          <RiMoneyRupeeCircleLine className="h-6 w-6 md:h-8 md:w-8" />
          <p className="text-xs sm:text-sm md:text-base">Cashflow</p>
        </div>
      </NavLink>
      <NavLink
        to="/advisory"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-blue-600 rounded px-2 py-1"
            : "text-blue-600"
        }
      >
        <div className="flex flex-col items-center">
          <BsPersonLinesFill className="h-6 w-6 md:h-8 md:w-8" />
          <p className="text-xs sm:text-sm md:text-base">Advisory</p>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;

