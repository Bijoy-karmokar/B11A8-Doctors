import React from "react";
import banner from "../assets/banner-img-1.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-40 py-16 space-y-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold w-3/4">
        Dependable Care, Backed by Trusted Professionals.
      </h2>
      <p className="text-lg font-medium text-gray-600">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className=" flex-col md:flex-row items-center w-3/4 space-x-2 space-y-3 ">
        <input
          className="w-3/4 h-12 px-4 shadow-xl border-none focus:outline-blue-600 rounded-3xl"
          type="text"
          placeholder="Search any Doctors"
        />
        {/* <button className='btn  btn-primary rounded-3xl h-12 text-lg'>Search Now</button> */}
        <button
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
          Search Now
          </span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row space-y-3 items-center justify-center gap-6">
        <img src={banner} alt="" />
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
