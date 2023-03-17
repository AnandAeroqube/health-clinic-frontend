import React from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import DoctorProfile from "./containers/DoctorProfile";
import Home from './containers/Home';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/doctor" element={<DoctorProfile />}></Route>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
};
export default App;
