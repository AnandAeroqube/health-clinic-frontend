import '../assets/styles/display-all-doctors.css'
import DoctorInfo from './DoctorInfo'
import React from 'react'

function DisplayAllDoctors() {
  return (
      <div className="grid-container">
           <DoctorInfo></DoctorInfo>
           <DoctorInfo></DoctorInfo>
           <DoctorInfo></DoctorInfo>
           <DoctorInfo></DoctorInfo>
           <DoctorInfo></DoctorInfo>
           <DoctorInfo></DoctorInfo>
      </div>
  )
}

export default DisplayAllDoctors