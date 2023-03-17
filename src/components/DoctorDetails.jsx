import React from 'react'
import '../assets/styles/myprofile.css'
import MyProfile from './MyProfile'
import AeroButton from './AeroButton'
function DoctorDetails() {
    return (
        <div class="Rectangle-1">
            <div className="row">
                <div className='profile-photo'>
                    <h2>Profile Photo</h2>
                    <div className='profile-photo-sub-div'>
                        <img src={require('../assets/images/user-profile-image.PNG')} />
                        <div className='profile-photo-sub-sub-div'>
                            <p style={{ marginTop: '25px', fontWeight: '600' }}>John Doe</p>
                        </div>
                    </div>
                </div>


            </div>
            <hr></hr>
            <div className="row">
                <div className='cell' >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        Mobile Number
                    </div>
                    <br></br>
                    +62-119293030
                </div>
                <div className='cell' >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        Email Address
                    </div>
                    <br></br>
                    kdsfklsgklms@gmail.com
                </div>
            </div>

            <div className="row">
                <div className='cell' >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        Gender
                    </div>
                    <br></br>
                    Male
                </div>
                <div className='cell' style={{ marginRight: '110px' }} >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        DOB
                    </div>
                    <br></br>
                    09/12/2890
                </div>
            </div>

            <hr></hr>



            <div className="just">
                <h4 style={{ color: 'grey', fontWeight: '550' }}>Address</h4>
            </div>

            <div className="row" style={{ flexDirection: 'column', lineHeight: '30px', marginBottom: '50px' }}>
                <p>Park Street,Canada</p>
                <p>529 Carling, Avenue</p>
                <p>Ottawa,Ontario(ON),K1Z 7B5</p>
                <p>613-796-6846</p>
            </div>

            <hr></hr>

            <div className="just"  style={{marginBottom:'20px'}}>
                <h4 style={{ color: 'grey', fontWeight: '550' }}>Professional Details</h4>
            </div>

            <div className="row">
                <div className='cell'  >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        Specialization
                    </div>
                    <br></br>
                    Dentist
                </div>
                <div className='cell' style={{ marginRight: '35px' }} >
                    <div style={{ color: 'gray', fontWeight: '550' }}>
                        Registration Council
                    </div>
                    <br></br>
                    Council Name
                </div>
            </div>

            

            <AeroButton buttontext='Remove Doctor' />

        </div>
    )
}

export default DoctorDetails