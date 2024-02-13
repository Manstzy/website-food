import pizza from "../assets/pizza.svg";
import playStore from "../assets/play store.svg";
import apple from "../assets/apple.svg";
import List from "./List";
const Footer = () => {
  return (
    <div id="about" className="absolute right-0 left-0">
      <div className="bg-[#FFEFEC] w-full flex items-center justify-center py-10 ">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold font-poppins">Subscribe our newsletter</p>
          <p className="font-poppins  text-sm mt-0 text-center">
            Browse local restaurant and businesses for delivery by entering your
            addres blow.
          </p>
          <div className="flex px-2 py-1 justify-between border-none bg-white rounded-full">
            <input
              type="text"
              className="px-2 rounded-full outline-none bg-white border-none"
              placeholder="Enter your email addres.."
            />
            <button className="bg-[#E94339] cursor-pointer border-none px-4 py-3 rounded-full text-white">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black py-5 px-5">
        <img src={pizza} className="w-10 h-10" alt="" />
        <div className="flex gap-3">
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
              <li className="text-md font-semibold font-poppins">
                Google Play
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <ul>
            <li className="mb-5 mt-10 cursor-pointer">
              <a className="no-underline text-white font-bold" href="#">
                Quick Links
              </a>
            </li>
            <List text={"Features"} />
            <List text={"Food Menu"} />
            <List text={"Offer"} />
            <List text={"Review"} />
            <List text={"Rider"} />
          </ul>
          <ul>
            <li className="mb-5 mt-10 cursor-pointer">
              <a className="no-underline text-white font-bold" href="#">
                Get to know Us
              </a>
            </li>
            <List text={"Gift Cards"} />
            <List text={"DoorDash Stories"} />
            <List text={"Linkedln"} />
            <List text={"Glassdoor"} />
            <List text={"Accesibility"} />
          </ul>
          <ul>
            <li className="mb-5 mt-10 cursor-pointer">
              <a className="no-underline text-white font-bold" href="#">
                News
              </a>
            </li>
            <List text={"Blog"} />
            <List text={"FAQ"} />
            <List text={"Lift Media"} />
            <List text={"Press"} />
            <List text={"Presse kit"} />
          </ul>
          <ul>
            <li className="mb-5 mt-10 cursor-pointer">
              <a className="no-underline text-white font-bold" href="#">
                Contact
              </a>
            </li>
            <List text={"WhatsApp"} />
            <List text={"Support24"} />
          </ul>
        </div>
        <p className="text-white text-center">
          &copy; pizza. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
