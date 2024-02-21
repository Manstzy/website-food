import pizza from "../assets/pizza.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
const SignUp = () => {
  const { user, signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/website-food/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 p-2 flex items-center">
      <div className="bg-[#E94339] mx-auto rounded-md p-4 w-full h-[400px] max-w-[400px] flex flex-col items-center">
        <div className="flex items-center mr-40">
          <img src={pizza} className="w-8 h-8 phone:w-10 phone:h-10" alt="" />
          <h1 className="text-white text-[12px] phone:text-[14px] font-inter">
            Daftar
          </h1>
        </div>
        <form
          className="text-white font-poppins flex gap-2 flex-col mt-5"
          onSubmit={handleSubmit}
        >
          <label className="text-sm" htmlFor="email">
            Masukkan email kamu :{" "}
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="px-4 py-2 w-52 phone:w-60 medium:w-72 rounded-lg border-none outline-none text-gray-500"
            placeholder="Input your email addres"
          />
          <label className="text-sm" htmlFor="password">
            Masukkan password kamu :{" "}
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="px-4 py-2 w-52 phone:w-60 medium:w-72 rounded-lg border-none outline-none text-gray-500"
            placeholder="Input your password"
          />
          <button className="mt-5 bg-[#FFEFEC] hover:bg-[#c5bcbadd] transition-all duration-300 text-black  w-40 rounded-lg border-none cursor-pointer py-2 mx-auto">
            Daftar
          </button>
          <p className="text-center text-sm">
            Punya akun ?{" "}
            <Link
              to={"/website-food/login"}
              className="no-underline text-indigo-500"
            >
              Login
            </Link>
          </p>
        </form>
        <p className="text-sm text-white mt-16">
          &copy; Jika kamu lapar makanlah
        </p>
      </div>
    </div>
  );
};
export default SignUp;
