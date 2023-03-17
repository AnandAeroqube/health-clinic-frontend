import React from 'react'
import CustomRating from '../CustomRating'
import './index.css'

const DoctorCardBig = () => {
  return (
    <div className='dcb'>
        <div className='dcb-img'>
            <img src='placeholder.jpg' alt='John Doe'></img>
        </div>
        <div className="dcb-body">
            <div className="dcb-name">Dr. John Doe</div><br></br>
            <div className="dcb-desc">BDS, MDS - Oral & Maxillofacial Surgery and Oral Implantology, FICOI Oral And MaxilloFacial Surgeon, Implantologist, Dentist</div><br></br>
            <div className="dcb-exp">12 years experience overall</div><br></br>
            <div className="dcb-speciality">
                <p>Speciality</p>
                <ol className="dcb-splist">
                    <li>Physiotherapist, Mental Health, Surgeon</li>
                    <li>Medical Registration Verified</li>
                </ol>
            </div>
            <div className="dcb-rating">
                <CustomRating value={4.5} />
            </div>
        </div>
    </div>
  )
}

export default DoctorCardBig