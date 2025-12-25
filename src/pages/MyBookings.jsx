import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Appoinments from "../components/Appoinments";
import { deletedDoctors, getDoctors } from "../Utils";

const MyBookings = () => {
  const doctors = useLoaderData();
   const [displayDocotors,setDisplayDoctors] = useState(doctors);
    useEffect(()=>{
        const saveDoctors = getDoctors();
        setDisplayDoctors(saveDoctors);
    },[])

     const handleDeletedDoc=(id)=>{
        deletedDoctors(id);
        const saveDoctors = getDoctors();
        setDisplayDoctors(saveDoctors);
    }
  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          My Today Appointments
        </h2>
        <p className="text-lg text-gray-600">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="grid grid-cols-1">
        {displayDocotors.map((doctor) => (
          <Appoinments key={doctor.id} doctor={doctor} handleDeletedDoc={handleDeletedDoc}></Appoinments>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
