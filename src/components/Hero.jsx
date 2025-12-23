import React from 'react';
import banner from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center px-40 py-16 space-y-4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold w-3/4'>Dependable Care, Backed by Trusted Professionals.</h2>
            <p className='text-lg font-medium text-gray-600'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex items-center w-3/4 gap-2 '>
                <input className='flex-1 w-3/6 h-12 px-4 shadow-xl border-none focus:outline-blue-600 rounded-3xl' type="text" placeholder='Search any Doctors' />
                <button className='btn  btn-primary rounded-3xl h-12 text-lg'>Search Now</button>
            </div>
            <div className='flex items-center justify-center gap-6'>
                <img src={banner} alt="" />
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;