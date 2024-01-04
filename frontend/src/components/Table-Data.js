import React from 'react';

const TableData = ({ bookingData }) => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Account ID</th>
            <th style={styles.th}>Doctor Email</th>
            <th style={styles.th}>Doctor Timezone</th>
            <th style={styles.th}>Booking ID</th>
            <th style={styles.th}>Order ID</th>
            {/* Add more headers as needed */}
            <th style={styles.th}>Customer Name</th>
            <th style={styles.th}>Customer Phone</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Meeting Start Time</th>
            <th style={styles.th}>Meeting End Time</th>
            <th style={styles.th}>Duration</th>
            <th style={styles.th}>Earnings</th>
            <th style={styles.th}>Transaction Status</th>
            <th style={styles.th}>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((appointment) => (
            <tr key={appointment._id} style={styles.tr}>
              <td style={styles.td}>{appointment.Username_doctor}</td>
              <td style={styles.td}>{appointment.accId}</td>
              <td style={styles.td}>{appointment.doctorEmail}</td>
              <td style={styles.td}>{appointment.doctorTimezone}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].bookingId}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].orderId}</td>
              {/* Add more cells as needed */}
              <td style={styles.td}>{appointment.bookedServicesData[0].customerName}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].customerPhoneNumber}</td>
              <td style={styles.td}>
                {appointment.bookedServicesData[0].location ? (
                  `${appointment.bookedServicesData[0].location.country}, ${appointment.bookedServicesData[0].location.city}, ${appointment.bookedServicesData[0].location.state}`
                ) : (
                  'Location not available'
                )}
              </td>
              <td style={styles.td}>{appointment.bookedServicesData[0].meetingStartTime}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].meetingEndTime}</td>
              <td style={styles.td}>{calculateDuration(appointment.bookedServicesData)}</td>
              <td style={styles.td}>{`${appointment.bookedServicesData[0].amount} ${appointment.bookedServicesData[0].currency}`}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].transactionStatus}</td>
              <td style={styles.td}>{appointment.bookedServicesData[0].bookingStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateDuration = (bookingData) => {
  if (!bookingData[0].meetingStartTime || !bookingData[0].meetingEndTime) {
    return 'Duration not available';
  }

  const startTime = new Date(bookingData[0].meetingStartTime);
  const endTime = new Date(bookingData[0].meetingEndTime);

  const durationInMilliseconds = endTime - startTime;

  const hours = Math.floor(durationInMilliseconds / 3600000);
  const minutes = Math.floor((durationInMilliseconds % 3600000) / 60000);

  return `${hours} hours ${minutes} minutes`;
};

const styles = {
  container: {
    margin: '20px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thead: {
    background: '#007BFF',
    color: '#fff',
  },
  tr: {
    borderBottom: '1px solid #dee2e6',
  },
  th: {
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
  },
};

export default TableData;
