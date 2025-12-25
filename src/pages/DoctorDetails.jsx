import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const doctors = useLoaderData();
  const { id } = useParams();
  // console.log(id,doctors);

  const singleDoctor = doctors.find((doctor) => doctor.id === parseInt(id));
  // console.log(singleDoctor);
  const {
    name,
    image,
    hospital,
    education,
    availability,
    phone,
    speciality,
    consultationFee,
    timings,
    about,
  } = singleDoctor;

  return (
    <div className="space-y-5">
      <div className="flex flex-col items-center justify-center space-y-3 p-10">
        <h3 className="text-3xl md:text-5xl font-bold">Doctors Profile Details</h3>
        <p className="text-lg  text-center text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque rem architecto repudiandae accusantium mollitia eum ipsum cum porro eius nam, libero numquam accusamus. Sequi iure itaque vitae eveniet velit eaque.</p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-xl"
          />
          <div className="space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
           <div className="text-lg space-y-3">
            <p>MBBS,MD</p>
            <p>{speciality}</p>
            <p>Education:{education}</p>
           </div>
            <h3 className="text-xl">Working at : <span className="font-semibold">{hospital}</span></h3>
            <h3>&copy; Reg No :{phone}</h3>
            <p className=" text-lg font-normal">
             {about}
            </p>
            <h2 className="text-lg">Availability:{availability}</h2>
            <p className="text-xl font-semibold">consultationFee : Taka ${consultationFee} (incl. Vat) Per consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
