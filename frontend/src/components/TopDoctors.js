
// import React, { useState, useEffect } from 'react';

// const TopDoctors = () => {
//   const [topDoctors, setTopDoctors] = useState([]);

//   useEffect(() => {
//     // Fetch top 10 doctors based on amount from the server
//     fetch('http://localhost:5000/api/bookings')
//       .then((response) => response.json())
//       .then((data) => setTopDoctors(data))
//       .catch((error) => console.error('Error fetching top doctors:', error));
//   }, []);

//   // Create a dictionary to store the total amount for each doctor's name
//   const doctorAmounts = {};

//   // Calculate the total amount for each unique doctor's name
//   topDoctors.forEach((doctor) => {
//     const doctorName = doctor.Username_doctor;
//     const amount = doctor.bookedServicesData[0].amount;

//     if (doctorAmounts[doctorName]) {
//       doctorAmounts[doctorName] += amount;
//     } else {
//       doctorAmounts[doctorName] = amount;
//     }
//   });

//   // Convert the dictionary into an array of objects
//   const doctorsWithTotalAmount = Object.keys(doctorAmounts).map((doctorName) => ({
//     Username_doctor: doctorName,
//     totalAmount: doctorAmounts[doctorName],
//   }));

//   // Sort doctors in descending order based on the total amount
//   const sortedDoctors = doctorsWithTotalAmount.sort((a, b) => b.totalAmount - a.totalAmount);

//   return (
//     <div>
//       <h2>Top Doctors by Total Amount</h2>
//       <ul>
//         {sortedDoctors.map((doctor, index) => (
//           <li key={index}>
//             <h4>{doctor.Username_doctor}</h4>
//             <p>Total Amount: {doctor.totalAmount}</p>
//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TopDoctors;

import React, { useState, useEffect } from 'react';

const TopDoctors = () => {
  const [topDoctors, setTopDoctors] = useState([]);

  useEffect(() => {
    // Fetch top 10 doctors based on amount from the server
    fetch('http://localhost:5000/api/bookings')
      .then((response) => response.json())
      .then((data) => setTopDoctors(data))
      .catch((error) => console.error('Error fetching top doctors:', error));
  }, []);

  // Create a dictionary to store the total amount for each doctor's name
  const doctorAmounts = {};

  // Calculate the total amount for each unique doctor's name
  topDoctors.forEach((doctor) => {
    const doctorName = doctor.Username_doctor;
    const amount = doctor.bookedServicesData[0].amount;

    if (doctorAmounts[doctorName]) {
      doctorAmounts[doctorName] += amount;
    } else {
      doctorAmounts[doctorName] = amount;
    }
  });

  // Convert the dictionary into an array of objects
  const doctorsWithTotalAmount = Object.keys(doctorAmounts).map((doctorName) => ({
    Username_doctor: doctorName,
    totalAmount: doctorAmounts[doctorName],
  }));

  // Sort doctors in descending order based on the total amount
  const sortedDoctors = doctorsWithTotalAmount.sort((a, b) => b.totalAmount - a.totalAmount);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Top Doctors by Total Amount</h2>
      <ul style={styles.list}>
        {sortedDoctors.map((doctor, index) => (
          <li key={index} style={styles.listItem}>
            <h4 style={styles.doctorName}>{doctor.Username_doctor}</h4>
            <p style={styles.totalAmount}>Total Amount: {doctor.totalAmount}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  doctorName: {
    color: '#007BFF',
    fontSize: '20px',
  },
  totalAmount: {
    color: '#28a745',
    fontSize: '16px',
  },
};

export default TopDoctors;
