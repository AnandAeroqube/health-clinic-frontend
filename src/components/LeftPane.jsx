import React from 'react'
import '../assets/styles/LeftPane.css'

function LeftPane() {
    return (
        <div className="Rectangle-2">
            <div className='sub-div'>
                <div class="Ellipse-211"></div>
                <h3>Treatment Solutions</h3>
            </div>

            <div className="list">
                <ul className='main-list'>
                    <li className="item">My Doctors</li>
                    <li className="item">Appointments</li>
                    <li className="item">Lab Tests</li>
                    <li className="item">Online Consultations</li>
                    <li className="item">Feedback</li>
                </ul>
            </div>

        </div>
    )
}

export default LeftPane