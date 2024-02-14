import playStore from "../assets/play store.svg";
import apple from "../assets/apple.svg";
import Images from "../assets/Images.png";
const Main = () => {
  return (
    <div id="restaurant" className="py-16 px-5 desktop:px-12">
      <div className="tablet:flex tablet:justify-between">
        <div>
          <h1 className="font-[800] large:mt-10 desktop:text-[45px] max-w-[380px] desktop:max-w-[500px] text-4xl font-inter desktop:mt-12">
            Your Favorite Food Delivery Partner..
          </h1>
          <p className="font-poppins text-slate-500 large:mt-5 desktop:max-w-[400px] large:max-w-[350px] max-w-[300px] mt-10">
            The food at your doorstep. Why starve when u have us. you hunger
            partner. Straight out of the oven to your doorstep
          </p>
          <div className="flex px-2 py-1 mt-20 desktop:max-w-[400px] desktop:mt-8 large:mt-2 large:w-96 max-w-[350px] justify-between border-none bg-slate-200 rounded-full">
            <input
              type="text"
              className="px-2 rounded-full outline-none bg-slate-200 border-none"
              placeholder="Enter your delivery location"
            />
            <button className="bg-[#E94339] cursor-pointer border-none px-4 py-3 rounded-full text-white">
              Order Now
            </button>
          </div>

          <div className="flex gap-3 mt-5 large:mt-0 desktop:gap-10">
            <div className="flex items-center border-none rounded-md w-40 mt-10 p-2 bg-gray-200">
              <img src={apple} className="w-9 h-9 mr-2" alt="" />
              <ul className="list-none m-0 p-0">
                <li className="text-[9px] -ml-1 mb-1 font-semibold font-poppins">
                  Download on this side
                </li>
                <li className="text-md font-semibold font-poppins">
                  Play Store
                </li>
              </ul>
            </div>
            <div className="flex items-center border-none rounded-md w-40 mt-10 p-2 bg-gray-200">
              <img src={playStore} className="w-9 h-9 mr-2" alt="" />
              <ul className="list-none m-0 p-0">
                <li className="text-[10px] font-semibold font-poppins">
                  GET IT ON
                </li>
                <li className="text-md font-semibold font-poppins">
                  Google Play
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#F2EBDA] hidden mt-10 desktop:h-[340px] desktop:w-[420px] h-[300px] tablet:flex laptop:py-4 laptop:w-[360px] items-center justify-center rounded-xl">
          <img
            src={Images}
            className="w-72 h-72 mt-4 laptop:w-80 laptop:h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
