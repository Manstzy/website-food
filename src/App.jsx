import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ContextProvider } from "./context/AuthContext";

const App = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/website-food" element={<Home />} />
          <Route path="/website-food/login" element={<Login />} />
          <Route path="/website-food/signup" element={<SignUp />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
