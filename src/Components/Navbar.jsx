import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => setisOpen(!isOpen);

  return (
    <nav className="fixed bg-dark text-white flex justify-between w-full items-center py-6 px-4 lg:px-8">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
          Derrick Amenuve
        </h1>
      </div>
      <ul className="text-lg font-light hidden md:flex">
        <li className="hover:text-yellowish ">
          <Link to="/works">Works</Link>
        </li>
        <li className="hover:text-yellowish ">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-yellowish">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Harmburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!isOpen ? <SlMenu /> : <TfiClose />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !isOpen
            ? "hidden"
            : "absolute top-0 text-2xl left-0 w-full h-screen bg-dark flex flex-col justify-center items-center"
        }
      >
        <li className="hover:text-yellowish py-5">
          <Link to="/works">Works</Link>
        </li>
        <li className="hover:text-yellowish  py-5">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-yellowish py-5">
          <Link to="/contact">Contact</Link>t
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
