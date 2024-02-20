import pizza from "../assets/pizza.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgNav, setBgNav] = useState(false);
  const handleBgNav = () => {
    if (scrollY >= 5) {
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
          ? "w-full bg-[#E94339] top-0 desktop:h-12 z-10   left-0 transition-all  fixed h-10 flex justify-between py-2 px-5 items-center"
          : "w-full fixed h-10 flex top-0 desktop:h-12 z-10  desktop:items-center left-0 transition-all  justify-between py-2 px-5 items-center"
      }
    >
      <img
        data-aos="fade-right"
        src={pizza}
        className="w-8 h-8 medium:w-10 medium:h-10 desktop:ml-10 "
        alt=""
      />
      <ul
        data-aos="fade-down"
        className="large:flex items-center list-none gap-6 hidden "
      >
        <li className="font-inter cursor-pointer">
          <ScrollLink
            to="restaurant"
            smooth={true}
            className={
              bgNav
                ? "no-underline hover:bg-[#E94339] text-white hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
                : "no-underline text-black hover:bg-[#E94339] hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
            }
          >
            Restaurant
          </ScrollLink>
        </li>
        <li className="font-inter cursor-pointer ">
          <ScrollLink
            to="recipes"
            smooth={true}
            className={
              bgNav
                ? "no-underline hover:bg-[#E94339] text-white hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
                : "no-underline text-black hover:bg-[#E94339] hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
            }
          >
            Recipes
          </ScrollLink>
        </li>
        <li className="font-inter cursor-pointer ">
          <ScrollLink
            to="about"
            smooth={true}
            className={
              bgNav
                ? "no-underline hover:bg-[#E94339] text-white hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
                : "no-underline text-black hover:bg-[#E94339] hover:text-white duration-200 transition-all px-4 py-2 rounded-full"
            }
          >
            About
          </ScrollLink>
        </li>
      </ul>

      <div data-aos="fade-left" className="flex items-center desktop:mr-10 ">
        <RouterLink
          to={"/website-food/login"}
          className={
            bgNav
              ? "px-2 py-2 font-inter no-underline medium:p-3 border-none transition-all cursor-pointer duration-200 text-white bg-[#E94339]"
              : "px-2 py-2 font-inter no-underline medium:p-3 border-none transition-all cursor-pointer duration-200 bg-white"
          }
        >
          Login
        </RouterLink>
        <RouterLink
          to={"/website-food/signup"}
          className={
            bgNav
              ? "px-4 py-2 mr-2 medium:px-3 large:mr-12 medium:mr-4 rounded-full cursor-pointer no-underline border-none font-inter text-black bg-white transition-all duration-200"
              : "px-4 py-2 mr-2 medium:px-3 large:mr-12 medium:mr-4 rounded-full cursor-pointer no-underline border-none font-inter text-white transition-all duration-200 bg-[#E94339]"
          }
        >
          Sign Up
        </RouterLink>
        <img
          onClick={handleNav}
          src={menu}
          className="w-8 h-8 mr-10 medium:w-10 medium:h-10 large:hidden block"
          alt=""
        />
      </div>
      <div
        className={
          nav
            ? "absolute z-10 h-[350px] p-4 w-full transition-all duration-200 -top-2 bg-rose-950/80 right-0"
            : "absolute z-10 h-[350px] p-4 w-full -top-[1000%] transition-all duration-200 bg-rose-950/80 right-0"
        }
      >
        <ul className="list-none border-b-none text-white">
          <li className="p-4 flex items-center cursor-pointer">
            <ScrollLink
              onClick={handleNav}
              smooth={true}
              to="restaurant"
              className="no-underline p-2 text-white text-2xl"
            >
              Restaurant
            </ScrollLink>
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <ScrollLink
              onClick={handleNav}
              smooth={true}
              to="recipes"
              className="no-underline p-2 text-white text-2xl"
            >
              Recipes
            </ScrollLink>
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <ScrollLink
              onClick={handleNav}
              smooth={true}
              to="about"
              className="no-underline p-2 text-white text-2xl"
            >
              About
            </ScrollLink>
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
