import React from 'react';
import { addDoctors } from '../Utils';

const BookAppoint = ({singleDoctor}) => {
    const handleDoctors =()=>{
        addDoctors(singleDoctor);
        
    }
    return (
        <div className='flex flex-col space-y-5 p-20 bg-base-100 shadow-lg mb-5 rounded-2xl'>
            <h2 className='text-3xl text-center'>Book an Appointment</h2>
           <div className='space-y-3'>
             <p className='border border-gray-600 border-dashed'></p>
            <div className='flex justify-between text-lg font-bold'>
                <h3>Availablility</h3>
                <button className='badge badge-success p-2'>Doctor Available Today</button>
            </div>
             <p className='border border-gray-600 border-dashed'></p>
           </div>
             <p className='badge badge-info ml-20 p-3'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
             <button onClick={handleDoctors} className='btn btn-primary w-3/4 mx-auto rounded-3xl text-lg font-bold'>Book Appointment Now</button>
        </div>
    );
};

export default BookAppoint;