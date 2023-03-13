import React from 'react'
import LeftPane from './LeftPane'
import MyProfile from './MyProfile'
import '../assets/styles/account.css'

function Account() {
  return (
    <div className='account-div'>
        <LeftPane/>
        <MyProfile/>
    </div>
  )
}

export default Account