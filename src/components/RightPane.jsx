import React from 'react'
import DoctorInfo from './DoctorInfo'
import '../assets/styles/rightpane.css'
import DisplayAllDoctors from './DisplayAllDoctors'
import MyDoctors from './MyDoctors/MyDoctors'
import DoctorDetails from './DoctorDetails'
import MyProfile from './MyProfile'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LabTests from './Lab-Tests/LabTests'
import Feedback from './Feedback/Feedback'
import OnlineConsultation from './Online-Consultations/OnlineConsultation'
import App from '../App'
import Appointments from './Appointments/Appointments'

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