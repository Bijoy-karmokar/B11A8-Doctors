import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <Link to="/" className="flex items-center justify-center gap-1">
        <img className="w-8" src={logo} alt="" />
        <h3 className=" text-2xl md:text-3xl  font-bold">Phudu</h3>
      </Link>
      <nav className="grid grid-flow-col gap-4 text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-6 text-blue-600" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-6 text-blue-600" : ""
          }
          to="/myBookings"
        >
          My-Bookings
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-6 text-blue-600" : ""
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-6 text-blue-600" : ""
          }
          to="/contactUs"
        >
          ContactUs
        </NavLink>
      </nav>
        <p className="border-1 w-3/5"/>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link target="_blank" to="https://facebook.com">
            {" "}
            <FaFacebook  size={25} className="text-blue-600"></FaFacebook>
          </Link>
          <Link target="_blank" to="https://twitter.com">
            {" "}
            <FaTwitter  size={25} className="text-gray-600"></FaTwitter>
          </Link>
          <Link target="_blank" to="https://instagram.com">
            {" "}
            <FaInstagram  size={25} className="text-pink-600"></FaInstagram>
          </Link>
          <Link target="_blank" to="https://youtube.com">
            {" "}
            <FaYoutube size={25} className="text-red-600"></FaYoutube>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
