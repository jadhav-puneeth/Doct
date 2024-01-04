

// import React from 'react';

// const DoctorBookings = ({ bookingData }) => {
//   const doctorBookings = {};

//   // Extract doctor bookings
//   bookingData.forEach((booking) => {
//     const doctorName = booking.Username_doctor;

//     // Count bookings by doctor
//     doctorBookings[doctorName] = (doctorBookings[doctorName] || 0) + booking.bookedServicesData.length;
//   });

//   return (
//     <div>
//       <h2>Doctor Bookings</h2>
//       <ul>
//         {Object.entries(doctorBookings).map(([doctor, count]) => (
//           <li key={doctor}>
//             <strong>{doctor}:</strong> {count} bookings
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DoctorBookings;

import React from 'react';

const DoctorBookings = ({ bookingData }) => {
  const doctorBookings = {};

  // Extract doctor bookings
  bookingData.forEach((booking) => {
    const doctorName = booking.Username_doctor;

    // Count bookings by doctor
    doctorBookings[doctorName] = (doctorBookings[doctorName] || 0) + booking.bookedServicesData.length;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Doctor Bookings</h2>
      <ul style={styles.list}>
        {Object.entries(doctorBookings).map(([doctor, count]) => (
          <li key={doctor} style={styles.listItem}>
            <strong style={styles.doctorName}>{doctor}:</strong> {count} bookings
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
    background: '#f8f9fa', // Background color
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
};

export default DoctorBookings;
