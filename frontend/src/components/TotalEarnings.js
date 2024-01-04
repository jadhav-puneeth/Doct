// import React from 'react';

// const TotalEarnings = ({ bookingData }) => {
//   const totalEarnings = bookingData.reduce((sum, booking) => sum + booking.bookedServicesData.reduce((serviceSum, service) => serviceSum + service.amount, 0), 0);

//   return (
//     <div>
//       <h2>Total Earnings</h2>
//       <p>{totalEarnings} INR</p>
//     </div>
//   );
// };

// export default TotalEarnings;

import React from 'react';

const TotalEarnings = ({ bookingData }) => {
  const totalEarnings = bookingData.reduce(
    (sum, booking) =>
      sum +
      booking.bookedServicesData.reduce(
        (serviceSum, service) => serviceSum + service.amount,
        0
      ),
    0
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Total Earnings</h2>
      <p style={styles.totalAmount}>{totalEarnings} INR</p>
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
    width: '80%', // Adjust width as needed
    margin: 'auto', // Center the component
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  },
  totalAmount: {
    color: '#28a745',
    fontSize: '20px',
  },
};

export default TotalEarnings;
