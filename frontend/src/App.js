import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Route, Routes , Navigate ,BrowserRouter} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import DoctorBookings from './components/DoctorBookings';
import EarningsByServiceCategory from './components/EarningsByServiceCategory';
import DoctorEarnings from './components/DoctorEarnings';
import TotalEarnings from './components/TotalEarnings';
import ServiceCategoryList from './components/ServiceCategoryList';
import TopDoctors from './components/TopDoctors';
import DoctorStats from './components/DoctorStats';
import Register from './components/Register';
import Login from './components/Login';
import Mainlr from './components/Mainlr';
import Spinner from './components/Spinner';
import TableData from './components/Table-Data';


const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  const user = localStorage.getItem("token");
  const [bookingData , setBookingData] = useState([])
  const url = "http://localhost:5000/api/bookings"
  // const url = "https://doctor-booking-1m82.onrender.com"
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setBookingData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
    <BrowserRouter>
    {loading? (
      <Spinner/>
    )  : (
      <div>
      <Nav />
      <Routes>
        <Route>
        {/* {user && <Route path="/" exact element={<Mainlr />} />} */}
        <Route path="/register" exact element={<Register />} />
        <Route path="/" exact element={<Login />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        <Route exact path="/Bookings" element={<DoctorBookings bookingData={bookingData}/>} />
        <Route exact path="/Total-Earnings" element={<TotalEarnings bookingData={bookingData}/>} />
        <Route exact path="/Top-10-Doctors" element={<TopDoctors bookingData={bookingData}/>} />
        <Route exact path="/Doctor-Stats" element={<DoctorStats bookingData={bookingData}/>} />
        <Route exact path="/Doctor-Earnings" element={<DoctorEarnings bookingData={bookingData}/>} />
        <Route exact path="/Register" element={<Register bookingData={bookingData}/>} />
        <Route exact path="/Table-data" element={<TableData bookingData={bookingData}/>} />
        <Route exact path="/Services" element={<ServiceCategoryList bookingData={bookingData}/>} />
        <Route exact path="/EarningsByServiceCategory" element={<EarningsByServiceCategory bookingData={bookingData}/>} />
        </Route>
      </Routes>
      </div>
    
    )
      
    }
      
      </BrowserRouter>
    </>
  );
}


export default App;
