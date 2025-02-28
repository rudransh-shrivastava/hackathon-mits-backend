import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [active, setActive] = useState("Home");

return (
<nav className="bg-white shadow-md px-6 md:px-16 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
    {/* Logo */}
    <div className="flex items-center">
    {/* <img src="/logo.png" alt="Eclipse Logo" className="h-15" /> */}
    <Link to="/" onClick={() => setActive("LandingPage")}>
        <img src="./logo.png" alt="Eclipse Logo" className="h-15" />
    </Link>
    </div>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link
            to="/home"
            className={`relative ${active === "Home" ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setActive("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className={`relative ${active === "Features" ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setActive("Features")}            
          >
            Features
          </Link>
        </li>
        {/* <li>
          <Link
            to="/downloads"
            className={`relative ${active === "Downloads" ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setActive("Downloads")}
          >
            Downloads
          </Link>
        </li> */}
        <li>
          <Link
            to="/contactus"
            className={`relative ${active === "Contact Us" ? "text-black font-semibold" : "text-gray-700"}`}
            onClick={() => setActive("Contact Us")}
          >
            Contact Us
          </Link>
        </li>
      </ul>

    {/* Right Side (Login & Language Dropdown) */}
    <div className="flex items-center space-x-4">
      <Link to="/dashboard" >
      <button   className="bg-[#4182f9] px-4 py-2 rounded-md font-semibold shadow-sm text-white hover:bg-[#2f84d2]">
        Dashboard
      </button>
      </Link>
    <Link to= "/login">
    <button className="bg-gray-200 px-4 py-2 rounded-md font-semibold shadow-sm text-black hover:bg-red-300">
        Login
    </button>
    </Link>
    <div className="border-l h-6"></div>
    {/* */}
    </div>
</nav>
);
};

export default Navbar;
