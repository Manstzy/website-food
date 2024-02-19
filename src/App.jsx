import { useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
   AOS.init() 
  })
  return (
    <>
      <Navbar />
      <Main />
      <Recipes />
      <Footer />
    </>
  );
};

export default App;
