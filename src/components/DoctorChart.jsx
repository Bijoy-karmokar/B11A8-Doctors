import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;
  
  if (x == null || y == null || width == null || height == null) {
    return null;
  }
  
  return (
    <path 
      d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`} 
      fill={fill} 
    />
  );
}

const DoctorChart = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Public folder theke JSON load korun
    fetch('/doctors.json')
      .then(response => response.json())
      .then(data => {
        setDoctorsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading doctors data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Chart er jonno data prepare korun
  const chartData = doctorsData.map(doctor => ({
    name: doctor.name,
    patients: doctor.patients,
    experience: doctor.experience
  }));

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Doctor Statistics</h2>
          
          <div className="flex justify-center overflow-x-auto">
            <BarChart width={800} height={400} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="patients" fill="#3b82f6" shape={<TriangleBar />} name="Patients" />
              <Bar dataKey="experience" fill="#10b981" name="Years of Experience" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorChart;