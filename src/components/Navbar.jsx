import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png"

const Navbar = () => {
    const links =<>
        <li>
            <NavLink className={({isActive})=> isActive ? "underline underline-offset-6 text-blue-600" : ""} to={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive ? "underline underline-offset-6 text-blue-600" : ""} to={"/myBookings"}>My-Bookings</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive ? "underline underline-offset-6 text-blue-600" : ""} to={"/blogs"}>Blogs</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive ? "underline underline-offset-6 text-blue-600" : ""} to={"/contactUs"}>ContactUs</NavLink>
        </li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 md:px-16 lg:px-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
      <Link to="/" className="flex items-center justify-center gap-1">
        <img className="w-10" src={logo} alt="" />
        <h3 className=" text-xl md:text-2xl lg:text-4xl font-bold">Phudu</h3>
      </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium px-1">
         {
            links
         }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-lg  rounded-3xl">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
