// import React from 'react';

// const EarningsByServiceCategory = ({ bookingData }) => {
//   // if (!bookingData) {
//   //   return <div>No booking data available</div>;
//   // }
//   const earningsByServiceCategory = {};

//   // Extract earnings by service category and doctor
//   bookingData.forEach((booking) => {
//     const doctorName = booking.Username_doctor;

//     booking.bookedServicesData.forEach((service) => {
//       const serviceCategory = service.serviceCategory;

//       // Calculate total earnings by service category
//       earningsByServiceCategory[serviceCategory] = (earningsByServiceCategory[serviceCategory] || 0) + service.amount;
//     });
//   });

//   return (
//     <div>
//       <h2>Earnings by Service Category</h2>
//       <ul>
//         {Object.entries(earningsByServiceCategory).map(([category, earnings]) => (
//           <li key={category}>
//             <strong>{category}:</strong> {earnings} INR
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EarningsByServiceCategory;

// // import React from 'react';

// // const EarningsByServiceCategory = ({ bookingData }) => {
// //   // Check if bookingData is undefined or null
// //   if (!bookingData) {
// //     return <div>No booking data available</div>;
// //   }

// //   const earningsByServiceCategory = {};

// //   // Extract earnings by service category and doctor
// //   bookingData.forEach((booking) => {
// //     // Check if bookedServicesData is available in the current booking
// //     if (booking.bookedServicesData && Array.isArray(booking.bookedServicesData)) {
// //       const doctorName = booking.Username_doctor;

// //       booking.bookedServicesData.forEach((service) => {
// //         const serviceCategory = service.serviceCategory;

// //         // Calculate total earnings by service category
// //         earningsByServiceCategory[serviceCategory] = (earningsByServiceCategory[serviceCategory] || 0) + service.amount;
// //       });
// //     }
// //   });

// //   return (
// //     <div>
// //       <h3>Earnings by Service Category</h3>
// //       <ul>
// //         {Object.entries(earningsByServiceCategory).map(([category, earnings]) => (
// //           <li key={category}>
// //             <strong>{category}:</strong> {earnings} INR
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default EarningsByServiceCategory;

import React from 'react';

const EarningsByServiceCategory = ({ bookingData }) => {
  const earningsByServiceCategory = {};

  // Extract earnings by service category and doctor
  bookingData.forEach((booking) => {
    const doctorName = booking.Username_doctor;

    booking.bookedServicesData.forEach((service) => {
      const serviceCategory = service.serviceCategory;

      // Calculate total earnings by service category
      earningsByServiceCategory[serviceCategory] = (earningsByServiceCategory[serviceCategory] || 0) + service.amount;
    });
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Earnings by Service Category</h2>
      <ul style={styles.list}>
        {Object.entries(earningsByServiceCategory).map(([category, earnings]) => (
          <li key={category} style={styles.listItem}>
            <strong style={styles.categoryName}>{category}:</strong> {earnings} INR
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
    background: '#f5f5f5', // Background color
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryName: {
    color: '#007BFF',
    fontSize: '18px',
  },
};

export default EarningsByServiceCategory;
