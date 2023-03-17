import React from "react";
import {Routes, Route} from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Header from "./components/header";
import Footer from "./components/Footer";
import DoctorProfile from "./containers/DoctorProfile";
import Home from './containers/Home';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/doctor" element={<DoctorProfile />}></Route>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </>
  );
};
export default App;
