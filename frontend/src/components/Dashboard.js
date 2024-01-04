import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorStats from './DoctorStats';
import DoctorBookings from './DoctorBookings';
import TotalEarnings from './TotalEarnings';
import DoctorEarnings from './DoctorEarnings';
import TopDoctors from './TopDoctors';
import ServiceCategoryList from './ServiceCategoryList';
import EarningsByServiceCategory from './EarningsByServiceCategory';
import Login from './Login';

// import DetailedTable from './DetailedTable';

const Dashboard = ({ bookingData }) => {
  
  return (

    <Container fluid>
      <Row>
        <Col>
          {/* Display charts and statistics */}
          {/* <DoctorStats bookingData={bookingData} /> */}
          <DoctorBookings bookingData={bookingData} />
          <TotalEarnings bookingData={bookingData} />
          <DoctorEarnings bookingData={bookingData} />
          {/* <TopDoctors bookingData={bookingData} /> */}
          <ServiceCategoryList bookingData={bookingData} />
          <EarningsByServiceCategory bookingData={bookingData} />
          {/* <TopDoctors bookingData={bookingData} /> */}
          {/* <Login bookingData={bookingData} /> */}
        </Col>
        <Col>
          {/* Display detailed table */}
          {/* <DetailedTable bookingData={bookingData} /> */}
        </Col>
      </Row>
    </Container>
    
  );
};

export default Dashboard;