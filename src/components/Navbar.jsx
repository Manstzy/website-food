import pizza from "../assets/pizza.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgNav, setBgNav] = useState(false);
  const handleBgNav = () => {
    if (scrollY >= 60) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  };

  window.addEventListener("scroll", handleBgNav);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        bgNav
          ? "w-full bg-[#E94339] top-0 left-0 transition-all duration-200 fixed h-10 flex justify-between py-2 px-5 items-center"
          : "w-full fixed h-10 flex top-0 left-0 transition-all duration-200 justify-between py-2 px-5 items-center"
      }
    >
      <img src={pizza} className="w-8 h-8" alt="" />
      <div className="flex items-center">
        <button
          className={
            bgNav
              ? "px-2 py-2 font-inter border-none transition-all duration-200 text-white bg-[#E94339]"
              : "px-2 py-2 font-inter border-none transition-all duration-200 bg-white"
          }
        >
          Login
        </button>
        <button
          className={
            bgNav
              ? "px-4 py-2 mr-2 rounded-full border-none font-inter text-black bg-white transition-all duration-200"
              : "px-4 py-2 mr-2 rounded-full border-none font-inter text-white transition-all duration-200 bg-[#E94339]"
          }
        >
          Sign Up
        </button>
        <img onClick={handleNav} src={menu} className="w-8 h-8 mr-10" alt="" />
      </div>
      <div
        className={
          nav
            ? "absolute z-10 h-[350px] p-4 w-full transition-all duration-200 -top-2 bg-rose-950/80 right-0"
            : "absolute z-10 h-[350px] p-4 w-full -top-[1000%] transition-all duration-200 bg-rose-950/80 right-0"
        }
      >
        <ul className="list-none border-b-none text-white">
          <li
            onClick={handleNav}
            className="p-4 flex items-center cursor-pointer"
          >
            <a
              href="#restaurant"
              className="no-underline p-2 text-white text-2xl"
            >
              Restaurant
            </a>
          </li>
          <li
            onClick={handleNav}
            className="p-4 flex items-center cursor-pointer"
          >
            <a href="#recipes" className="no-underline p-2 text-white text-2xl">
              Recipes
            </a>
          </li>
          <li
            onClick={handleNav}
            className="p-4 flex items-center cursor-pointer"
          >
            <a href="#about" className="no-underline p-2 text-white text-2xl">
              About
            </a>
          </li>
          <li
            onClick={handleNav}
            className="p-4 flex items-center cursor-pointer"
          >
            <a className="no-underline p-2 text-white text-2xl">Close</a>
          </li>
        </ul>
        <div
          className={
            nav
              ? "abolute border-none top-0 bottom-0 h-[200vh] left-0 right-0 z-5 bg-black/80 transition-all duration-200 backdrop-blur"
              : "hidden top-0 bottom-0 border-none h-[200vh] left-0 right-0 z-5 bg-black/80 transition-all duration-200 backdrop-blur"
          }
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
