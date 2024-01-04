import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const DoctorStats = ({ bookingData }) => {
  const doctorCounts = {};
  const data = {
    labels: [],
    datasets: [{
      label: 'Number of Bookings',
      data: [],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      yAxisID: 'patients',
    }],
  };

  // Extract statistics
  bookingData.forEach((booking) => {
    const doctorName = booking.Username_doctor;

    // Count registered doctors
    doctorCounts[doctorName] = (doctorCounts[doctorName] || 0) + 1;
  });

  data.labels = Object.keys(doctorCounts);
  data.datasets[0].data = Object.values(doctorCounts);

  return (
    <div>
      <h2>Doctor Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default DoctorStats;
