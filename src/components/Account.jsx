import React from 'react'
import LeftPane from './LeftPane'
import MyProfile from './MyProfile'
import '../assets/styles/account.css'
import NoDoctorAdded from './NoDoctorAdded'
import DoctorInfo from './DoctorInfo'
import RightPane from './RightPane'

function Account() {
  return (
    <div className='account-div'>
        <LeftPane/>
         <RightPane/>
    </div>
  )
}

export default Account