import React from 'react'
import '../assets/styles/myprofile.css'
import userProfileImage from '../assets/images/user-profile-image.svg'
import { Button, Input } from '@mui/material'
import AeroButton from './Button'

function MyProfile() {
    return (
        <div class="Rectangle-1">
            <div className="row">
                <div className='profile-photo'>
                    <h2>Profile Photo</h2>
                    <div className='profile-photo-sub-div'>
                        <img src={require('../assets/images/user-profile-image.PNG')} />
                        <div className='profile-photo-sub-sub-div'>
                            <p>Pick a photo from your computer</p>
                            <p style={{ color: '#65c0ed', fontWeight: '500' }}>Add Photo</p>
                        </div>
                    </div>
                </div>
                <div className='cell' >
                    Full Name
                    <br></br>
                    <input className='input-text' />
                </div>

            </div>
            <hr></hr>
            <div className="row">
                <div className='cell' >
                    Mobile Number
                    <br></br>
                    <input className='input-text' />
                </div>
                <div className='cell' >
                    Email address
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>
            <hr></hr>

            <div className="just">
                <h4 style={{ color: 'grey', fontWeight: '550' }}>Address</h4>
            </div>

            <div className="row">
                <div className='cell' >
                    House No./ Street Name/ Area
                    <br></br>
                    <input className='input-text' />
                </div>
                <div className='cell' >
                    Colony/Street/Locality
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>



            <div className="row">
                <div className='cell' >
                    City
                    <br></br>
                    <input className='input-text' />
                </div>
                <div className='cell' >
                    State
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>



            <div className="row">
                <div className='cell' >
                    Country
                    <br></br>
                    <input className='input-text' />
                </div>
                <div className='cell' >
                    Area Code
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>
            <hr></hr>



            <div className="just">
                <h4 style={{ color: 'grey', fontWeight: '550' }}>Professional Details</h4>
            </div>

            <div className="row">
                <div className='cell' >
                    Registration Number
                    <br></br>
                    <input className='input-text' />
                </div>
                <div className='cell' >
                    Registration Council
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>



            <div className="row">
                <div className='cell' >
                    Year
                    <br></br>
                    <input className='input-text' />
                </div>
            </div>

            <AeroButton buttontext='Save Changes'/>

        </div>
    )
}

export default MyProfile