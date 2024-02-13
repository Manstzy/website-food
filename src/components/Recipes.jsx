import pizza from "../assets/pizza.svg";
import salad from "../assets/salad.svg";
import sushi from "../assets/sushi.svg";
import motor from "../assets/motor.svg";
import hotdog from "../assets/hotdog.svg";
import spageti from "../assets/spageti.svg";
import burger from "../assets/burger.svg";
import house from "../assets/house.svg";
import chose from "../assets/chose.svg";
import locations from "../assets/location.svg";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Recipes = () => {
  return (
    <div id="recipes" className="py-12">
      <h1 className="font-inter text-center">
        More Than{" "}
        <a href="#" className="text-[#E94339] no-underline font-inter">
          10,000{" "}
        </a>{" "}
        Dishes To Order !
      </h1>
      <p className="mx-auto text-center font-poppins max-w-[300px]">
        Welcome To The Biggest Network of Food Ordering & Delivey
      </p>

      <div className="grid grid-cols-3 px-5 gap-5">
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={pizza} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Pizza</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={salad} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Pizza</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={sushi} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Pizza</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col col-span-3 items-center justify-center">
          <p className="font-poppins text-md font-[500]">
            Find{" "}
            <a href="" className="text-[#E94339] no-underline">
              deals
            </a>{" "}
            <a href="" className="text-[#009B00] no-underline">
              ,free delivery
            </a>
            , and more from our restaurant partners.
          </p>
          <img src={motor} className="w-24 h-24 -mt-8 ml-32" alt="" />
        </div>
      </div>

      <div className="grid mt-5 grid-cols-3 px-5 gap-5">
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={hotdog} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Hotdog</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={burger} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Burger</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
            <img src={spageti} className="w-20 h-20" alt="" />
          </div>
          <p className="font-inter text-xl mt-2">Spageti</p>
        </div>
      </div>
      <h1 className="font-bold font-poppins text-center">How To Order?</h1>
      <div className="grid grid-cols-2 px-5 gap-3">
        <div className="bg-gray-200 p-2 rounded-2xl">
          <p className="absolute  text-xl mt-0 mb-0 font-semibold text-[#E94339]">
            01
          </p>
          <div className="bg-white rounded-md flex w-16 flex-col py-2 mx-auto items-center justify-center">
            <img src={locations} className="w-10 h-10" alt="" />
          </div>
          <p className="max-w-[100px] text-center mx-auto font-poppins">
            Chose your locations
          </p>
        </div>

        <div className="bg-gray-200 p-2 rounded-2xl">
          <p className="absolute  text-xl mt-0 mb-0 font-semibold text-[#E94339]">
            02
          </p>
          <div className="bg-white rounded-md flex w-16 flex-col py-2 mx-auto items-center justify-center">
            <img src={chose} className="w-10 h-10" alt="" />
          </div>
          <p className="max-w-[100px] text-center mx-auto font-poppins">
            Chose what to eat
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded-2xl">
          <p className="absolute  text-xl mt-0 mb-0 font-semibold text-[#E94339]">
            03
          </p>
          <div className="bg-white rounded-md flex w-16 flex-col py-2 mx-auto items-center justify-center">
            <img src={burger} className="w-10 h-10" alt="" />
          </div>
          <p className="max-w-[100px] text-center mx-auto font-poppins">
            May your first order
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded-2xl">
          <p className="absolute  text-xl mt-0 mb-0 font-semibold text-[#E94339]">
            04
          </p>
          <div className="bg-white rounded-md flex w-16 flex-col py-2 mx-auto items-center justify-center">
            <img src={house} className="w-10 h-10" alt="" />
          </div>
          <p className="max-w-[100px] text-center mx-auto font-poppins">
            Now Your food in way
          </p>
        </div>
      </div>
      <div className="h-1 w-10 mx-auto mt-20 bg-[#E94339]"></div>
      <h1 className="font-bold text-2x text-center mx-auto font-poppins">
        Our Client Feedback
      </h1>
      <p className="text-center mx-auto font-poppins -mt-3 ">
        The food at your doorstep. Why starve when u have us. You hunger partner{" "}
        .Straight out of the oven to your doorstep
      </p>
      <div className="mx-auto text-center ">
        <svg
          className="w-8 h-8"
          width="61"
          height="55"
          viewBox="0 0 61 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.3336 2.42599V12.3003C26.3336 13.6401 25.2325 14.7253 23.875 14.7253C19.0309 14.7253 16.3956 19.6254 16.0298 29.2984H23.875C25.2324 29.2984 26.3336 30.3851 26.3336 31.7234V52.5735C26.3336 53.9128 25.2325 54.998 23.875 54.998H2.95876C1.60159 54.998 0.500004 53.9116 0.500004 52.5735V31.7232C0.500004 27.0867 0.974567 22.832 1.90616 19.0743C2.8632 15.2222 4.33227 11.8545 6.27161 9.06365C8.26612 6.19569 10.7632 3.94516 13.6891 2.37785C16.6373 0.800526 20.0642 0 23.876 0C25.2324 0.00101852 26.3336 1.0872 26.3336 2.42599ZM58.0419 14.7262C59.3993 14.7262 60.5 13.6401 60.5 12.3022V2.42583C60.5 1.08721 59.3993 0.00186539 58.0419 0.00186539C54.232 0.00186539 50.8033 0.802563 47.8571 2.37971C44.9296 3.94686 42.4329 6.19552 40.4385 9.06551C38.498 11.8563 37.0291 15.2242 36.0721 19.0782C35.1399 22.8359 34.6664 27.0908 34.6664 31.7252V52.5755C34.6664 53.9148 35.7682 55 37.125 55H58.0419C59.3993 55 60.5 53.9138 60.5 52.5755V31.7252C60.5 30.3861 59.3993 29.3003 58.0419 29.3003H50.3069C50.6682 19.6265 53.2655 14.7262 58.0419 14.7262Z"
            fill="#FF5331"
          />
        </svg>
        <p className="italic font-semibold">
          {'"'} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          perferendis autem animi consequuntur ullam aliquam itaque.{'"'}
        </p>
        <p className="font-semibold font-inter">Mitchell Marsh</p>
        <p className="text-gray-700 font-serif -mt-4 text-[10px]">
          CEO, Bexon Agency
        </p>
        <FaArrowAltCircleLeft size={28} className="mr-2 hover:text-[#E94339]" />
        <FaArrowAltCircleRight
          size={28}
          className="hover:text-[#E94339] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Recipes;
