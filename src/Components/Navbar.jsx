import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => setisOpen(!isOpen);

  return (
    <nav className="bg-dark w-full text-white flex justify-between items-center py-4 px-4 lg:px-8">
      <div>
        <h1 className="text-base md:text-xl font-semibold">Derrick Amenuve</h1>
      </div>
      <ul className="text-lg font-light hidden md:flex">
        <li className="hover:text-yellowish ">About</li>
        <li className="hover:text-yellowish ">Works</li>
        <li className="hover:text-yellowish">Contact</li>
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
            : "absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center"
        }
      >
        <li className="hover:text-yellowish py-5">About</li>
        <li className="hover:text-yellowish  py-5">Works</li>
        <li className="hover:text-yellowish py-5">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
