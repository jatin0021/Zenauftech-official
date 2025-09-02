import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open); 
  return (
    <>
      <nav className="w-full h-auto">
        <div className="bg-green-800 text-white flex items-center justify-around flex-wrap">
          <div className="">
            <ul className="py-3 flex items-center justify-around gap-8 flex-wrap">
              <li>
                <a
                  href="tel:6398521470"
                  className="flex items-center gap-1.5 no-underline"
                >
                  <FaPhoneAlt />
                  6398521470
                </a>
              </li>
              <li>
                <a
                  href="mailto:zenauf@tech.com"
                  className="flex items-center gap-1.5 justify-center"
                >
                  <MdEmail className="mt-1" />
                  zenauf@tech.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1.5">
                  <IoLocationSharp />
                  G.R Tower Sector-75, Mohali
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl">
            <ul className="px-5 py-3 flex items-center justify-center gap-8 text-xl">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <CiLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg py-3 w-full flex items-center justify-around">
          <div>
            <img src="/zenuaf.webp" alt="React Logo" className="h-12" />
          </div>

          <div>
            <ul className="hidden md:flex items-center gap-5 text-lg font-medium">
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex">
            <a
              href="#"
              className="px-4 py-2 bg-black text-white rounded-2xl hover:bg-green-800 hover:text-white transition"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <HiMiniBars3CenterLeft size={24} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full  backdrop-blur-xl  w-64 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 ease-in-out md:hidden z-50`}>
                <div className="flex justify-end p-4">
                    <FaTimes size={24} className="cursor-pointer" onClick={toggleMenu} />
                </div>
                <div className="flex flex-col items-start p-6 space-y-6">
                    <Link to="/" onClick={toggleMenu} className="text-lg hover:text-gray-300">Home</Link>
                    <Link to="/about" onClick={toggleMenu} className="text-lg hover:text-gray-300">About us</Link>
                    <Link to="/services" onClick={toggleMenu} className="text-lg hover:text-gray-300">Services</Link>
                    <Link to="/Blog" onClick={toggleMenu} className="text-lg hover:text-gray-300">Blogs</Link>
                    <Link to="/Contact" onClick={toggleMenu} className="text-lg hover:text-gray-300">Contact Us</Link>
                </div>
            </div>
    </>
  );
};

export default Navbar;
