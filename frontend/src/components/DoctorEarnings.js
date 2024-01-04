// import React from 'react';

// const DoctorEarnings = ({ bookingData }) => {
//   const doctorEarnings = {};

//   // Extract doctor earnings
//   bookingData.forEach((booking) => {
//     const doctorName = booking.Username_doctor;

//     // Calculate total earnings of each doctor
//     doctorEarnings[doctorName] = (doctorEarnings[doctorName] || 0) + booking.bookedServicesData.reduce((sum, service) => sum + service.amount, 0);
//   });

//   return (
//     <div>
//       <h2>Doctor Earnings</h2>
//       <ul>
//         {Object.entries(doctorEarnings).map(([doctor, earnings]) => (
//           <li key={doctor}>
//             <strong>{doctor}:</strong> {earnings} INR
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DoctorEarnings;

import React from 'react';

const DoctorEarnings = ({ bookingData }) => {
  const doctorEarnings = {};

  // Extract doctor earnings
  bookingData.forEach((booking) => {
    const doctorName = booking.Username_doctor;

    // Calculate total earnings of each doctor
    doctorEarnings[doctorName] = (doctorEarnings[doctorName] || 0) +
      booking.bookedServicesData.reduce((sum, service) => sum + service.amount, 0);
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Doctor Earnings</h2>
      <ul style={styles.list}>
        {Object.entries(doctorEarnings).map(([doctor, earnings]) => (
          <li key={doctor} style={styles.listItem}>
            <strong style={styles.doctorName}>{doctor}:</strong> {earnings} INR
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
    background: '#fff',
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
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  doctorName: {
    color: '#007BFF',
    fontSize: '18px',
  },
};

export default DoctorEarnings;
