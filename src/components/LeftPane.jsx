import React from 'react'
import '../assets/styles/LeftPane.css'
import { Link } from 'react-router-dom'
function LeftPane({detail,handleDetail}) {
    return (
        <div className="Rectangle-2">
            <div className='sub-div'>
                <div class="Ellipse-211"></div>
                <h3>Treatment Solutions</h3>
            </div>

            <div className="list">
                <ul className='main-list'>
                    <li className="item"><a href='/my-doctors' onClick={handleDetail('My Dotors')}>My Doctors</a></li>
                    <li className="item"><a href='/appointments' onClick={handleDetail('Appointments')}>Appointments</a></li>
                    <li className="item"><a href='/lab-tests' onClick={handleDetail('Lab Tests')}>Lab Tests</a></li>
                    <li className="item"><a href='/online-consultation'>Online Consultation</a></li>
                    <li className="item"><a href='feedback'>Feedback</a></li>
                </ul>
            </div>

          
        </div>
    )
}

export default LeftPane