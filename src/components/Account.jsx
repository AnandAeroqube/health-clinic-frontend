import React from 'react'
import LeftPane from './LeftPane'
import MyProfile from './MyProfile'
import '../assets/styles/account.css'
import NoDoctorAdded from '../containers/MyDoctors/NoDoctorAdded'
import DoctorInfo from './DoctorInfo'
import RightPane from './RightPane'

function Account({detail,handleDetail}) {
  return (
    <div className='account-div'>
         <LeftPane detail={detail} handleDetail={handleDetail}/>
         <RightPane/>
    </div>
  )
}

export default Account