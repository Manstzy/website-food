import playStore from "../assets/play store.svg";
import apple from "../assets/apple.svg";
const Main = () => {
  return (
    <div id="restaurant" className="py-16 px-5">
      <h1 className="font-[800] text-4xl font-inter">
        Your Favorite Food Delivery Partner..
      </h1>
      <p className="font-poppins text-slate-500 max-w-[300px] mt-10">
        The food at your doorstep. Why starve when u have us. you hunger
        partner. Straight out of the oven to your doorstep
      </p>
      <div className="flex px-2 py-1 mt-20 justify-between border-none bg-slate-200 rounded-full">
        <input
          type="text"
          className="px-2 rounded-full outline-none bg-slate-200 border-none"
          placeholder="Enter your delivery location"
        />
        <button className="bg-[#E94339] cursor-pointer border-none px-4 py-3 rounded-full text-white">
          Order Now
        </button>
      </div>
      <div className="flex gap-3 mt-5">
        <div className="flex items-center border-none rounded-md w-40 mt-10 p-2 bg-gray-200">
          <img src={apple} className="w-9 h-9 mr-2" alt="" />
          <ul className="list-none m-0 p-0">
            <li className="text-[9px] -ml-1 mb-1 font-semibold font-poppins">
              Download on this side
            </li>
            <li className="text-md font-semibold font-poppins">Play Store</li>
          </ul>
        </div>
        <div className="flex items-center border-none rounded-md w-40 mt-10 p-2 bg-gray-200">
          <img src={playStore} className="w-9 h-9 mr-2" alt="" />
          <ul className="list-none m-0 p-0">
            <li className="text-[10px] font-semibold font-poppins">
              GET IT ON
            </li>
            <li className="text-md font-semibold font-poppins">Google Play</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
