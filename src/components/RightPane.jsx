import React from 'react'
import DoctorInfo from './DoctorInfo'
import '../assets/styles/rightpane.css'
import DisplayAllDoctors from '../containers/MyDoctors/DisplayAllDoctors'
import MyDoctors from '../containers/MyDoctors/MyDoctors'
import DoctorDetails from './DoctorDetails'
import MyProfile from './MyProfile'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LabTests from '../containers/Lab-Tests/LabTests'
import Feedback from '../containers/Feedback/Feedback'
import OnlineConsultation from '../containers/Online-Consultations/OnlineConsultation'
import App from '../App'
import Appointments from '../containers/Appointments/Appointments'

function RightPane() {
  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<MyProfile/>}/>
          <Route path='/my-doctors' element={<MyDoctors/>}/>
          <Route path='/lab-tests' element={<LabTests/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/online-consultation' element={<OnlineConsultation/>}/>
          <Route path='/appointments' element={<Appointments/>}/>

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default RightPane