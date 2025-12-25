import React from 'react';


const Appoinments = ({doctor,handleDeletedDoc}) => {
    const {name,id,education,consultationFee} = doctor;
   
   
    return (
        <div>
            <div className='flex flex-col space-y-5 p-20 bg-base-100 shadow-lg mb-5 rounded-2xl'>
    
            <div className='flex justify-between text-lg font-medium'>
                 <div>
                    <h3>{name}</h3>
                    <p>{education}</p>
                 </div>
                <p className=' p-2'>Appointment Fee : ${consultationFee} Taka + Vat</p>
            </div>
             <button onClick={()=>handleDeletedDoc(id)} className='btn btn-outline btn-error w-3/4 mx-auto rounded-3xl text-lg font-bold'>Cancel Appointment</button>
        </div>
        </div>
    );
};

export default Appoinments;