import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaUserCircle } from 'react-icons/fa'; // Importing a profile icon (FontAwesome)

const ActiveTimeTracker = () => {
    
  const [activeTime, setActiveTime] = useState(() => {
    return parseInt(localStorage.getItem('activeTime')) || 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTime(prev => {
        const updatedTime = prev + 1;
        localStorage.setItem('activeTime', updatedTime);
        return updatedTime;
      });
    }, 1000); // Increment every second

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Data for the donut chart
  const data = {
    labels: ['Time Spent', 'Remaining Time'],
    datasets: [
      {
        data: [activeTime, 86400 - activeTime], // Active time vs remaining in a day (24 hrs = 86400 sec)
        backgroundColor: ['#4CAF50', '#d3d3d3'], // Green for active time, gray for remaining time
        hoverBackgroundColor: ['#45a049', '#b0b0b0'],
      },
    ],
  };

  // Donut chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} seconds`, // Show seconds in tooltip
        },
      },
      legend: {
        display: false, // Disable the legend for now
      },
    },
    cutout: '80%', // Creates the donut effect by cutting out the center
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-6">
      {/* Profile Icon and Name Section */}
      <div className="flex items-center justify-center space-x-4">
        {/* Profile Icon */}
        
       
      </div>

      {/* Time Spent Section */}
      <div className="flex items-center justify-center w-full space-x-4">
        {/* Heading close to the chart */}
        <h2 className="text-white text-lg text-center">🕒 Time Spent: {formatTime(activeTime)}</h2>
        
        {/* Donut Chart */}
        <div className="w-[250px] h-[250px]"> {/* You can increase or decrease the size of the chart here */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ActiveTimeTracker;