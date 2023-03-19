import React from 'react'
import './index.css'
import CustomRating from '../CustomRating'
import {Button} from '@mui/material'

function DoctorClinicCard() {
  return (
    <div className='dcc'>
        <div className="dcc-address">
            <div className="dcc-address__location">Park Street, Canada</div>
            <CustomRating value={4.0} />
            <div className="dcc-address__full">
            529 Carling Avenue<br></br>
            Ottawa, Ontario(ON), K1Z 7B5<br></br>
            613-796-6846
            </div>
            <div className="dcc-address__dir">Get Directions</div>
        </div>
        <div className="dcc-app">
            <div className="dcc-app__days">Monday-Friday</div>
            <div className="dcc-app__time">04:00 PM - 07:00 PM</div>
            <Button variant="contained" className='doctor-card dcc-app__button' id="appointment-button">
                Book Appointment
            </Button>
        </div>
        <div className="dcc-fee">
            $150
        </div>
    </div>
  )
}

export default DoctorClinicCard