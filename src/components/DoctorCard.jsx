import React from "react";
import { Link } from "react-router";

const DoctorCard = ({ doctor }) => {
  //   console.log(doctor);
  const {
    id,
    name,
    image,
    education,
    availability,
    phone,
    speciality,
    consultationFee,
    timings,
    about,
  } = doctor;

  return (
    <div className="max-w-md p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full h-72 rounded-md dark:bg-gray-500"
      />
      <div className="mt-6 space-y-3">
        <div className="flex justify-between items-center gap-5">
          <span className="block text-lg font-medium tracking-widest uppercase dark:text-violet-600">
            {name}
          </span>
          <p className="dark:text-gray-800 text-sm badge badge-info font-medium text-white">
            {speciality}
          </p>
        </div>
        <h2 className="text-sm font-semibold tracking-wide">{education}</h2>
        <p className="text-sm font-light">{about}</p>
        <div className="flex justify-between items-center">
          <h2>
            <span className="font-medium">Availability</span>:[{availability}]
          </h2>
          <p>Fee:${consultationFee}</p>
        </div>
        <p className="font-medium">Time:{timings}</p>
        <p className="font-medium">Phones:{phone}</p>
      </div>
      <Link to={`/doctor/${id}`}>
              <button
        className="box-border relative z-30 mt-3 w-full inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
      >
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative z-20 flex text-lg items-center">
         View Details
        </span>
      </button>
      </Link>
    </div>
  );
};

export default DoctorCard;
