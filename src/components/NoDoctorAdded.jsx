import React from 'react'
import '../assets/styles/no-doctor-added.css'
import '../assets/images/sorry.PNG'
import AeroButton from './AeroButton'

function NoDoctorAdded() {
  return (
    <div className="no-doctor-added">
        <div className='centerer-container'>
        <img src={require('../assets/images/sorry.PNG')} className='sorry-img'/>    
        </div>
       
        <div className='main-text' variant='subtitle1'>Sorry, you don't have any doctors added</div>
        <div className="centerer-container">
            <AeroButton buttontext='Add Doctor'/>
        </div>
    </div>
  )
}

export default NoDoctorAdded