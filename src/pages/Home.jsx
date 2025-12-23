import React from 'react';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const doctors = useLoaderData();
    console.log(doctors);
    
    return (
        <div>
            <Hero></Hero>
            <Doctors doctors={doctors}></Doctors>
        </div>
    );
};

export default Home;