import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="nav-wrapper h-[10vh] flex justify-between transition-[0.5s] duration-[all] ease-[ease] sticky mb-8 top-0;
    "
    >
      <div className="nav-left flex-[1] items-start flex flex-col gap-8 mt-5">
        <Link to="/">
          <div className="nav-name text-2xl font-bold cursor-pointer text-[color:var(--black)] ">
            WRITEYFY
          </div>
        </Link>
      </div>

      <div className="nav-right flex items-center justify-end font-normal">
        <div className="nav-list flex-[10]">
          <ul
            style={{ listStyleType: "none" }}
            className="[&>a>li]:text-lg [&>a>li]:font-[500] flex gap-8 mr-16 cursor-pointer  "
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="hover:text-black-500">Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="hover:text-black-500">About us</li>
            </Link>
            <Link to="/writer" style={{ textDecoration: "none" }}>
              <li className="hover:text-black-500">Writer</li>
            </Link>
          </ul>
        </div>
        <br />
        <Link to="/admin/default">
          <button className="rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FD1D1D]/50 ">
            Admin Panel
          </button>
        </Link>
        <Link to="/writers/dashboard">
          <button className="rounded-xl ml-4 bg-gradient-to-br from-[#FC00FF] via-[#504CF3] to-[#02FFD1] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#504CF3]/50">
            Writer Panel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
