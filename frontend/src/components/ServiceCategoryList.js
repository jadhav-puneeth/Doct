// import React from 'react';

// const ServiceCategoryList = ( props ) => {
//   const bookingData = props.bookingData;
//   const serviceCategories = {};

//   // Extract service categories by doctor
//   bookingData.forEach((booking) => {
//     const doctorName = booking.Username_doctor;

//     booking.bookedServicesData.forEach((service) => {
//       const serviceCategory = service.serviceCategory;

//       // Add service category to the list
//       serviceCategories[doctorName] = serviceCategories[doctorName] || [];
//       if (!serviceCategories[doctorName].includes(serviceCategory)) {
//         serviceCategories[doctorName].push(serviceCategory);
//       }
//     });
//   });

//   return (
//     <div>
//       <h2>Service Category List</h2>
//       <ul>
//         {Object.entries(serviceCategories).map(([doctor, categories]) => (
//           <li key={doctor}>
//             <strong>{doctor}:</strong> {categories.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceCategoryList;

import React from 'react';

const ServiceCategoryList = (props) => {
  const bookingData = props.bookingData;
  const serviceCategories = {};

  // Extract service categories by doctor
  bookingData.forEach((booking) => {
    const doctorName = booking.Username_doctor;

    booking.bookedServicesData.forEach((service) => {
      const serviceCategory = service.serviceCategory;

      // Add service category to the list
      serviceCategories[doctorName] = serviceCategories[doctorName] || [];
      if (!serviceCategories[doctorName].includes(serviceCategory)) {
        serviceCategories[doctorName].push(serviceCategory);
      }
    });
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Service Category List</h2>
      <ul style={styles.list}>
        {Object.entries(serviceCategories).map(([doctor, categories]) => (
          <li key={doctor} style={styles.listItem}>
            <strong style={styles.doctorName}>{doctor}:</strong> {categories.join(', ')}
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

export default ServiceCategoryList;
