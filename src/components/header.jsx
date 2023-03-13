import React from 'react'
import '../assets/styles/header.css'
import usericon from '../assets/images/user-icon.svg'

function Header() {
    return (
        <div className='main-header'>
            <div className='sleeep-heading'><b>SLEEEP</b></div>
            <div className='navigations'>
                <div className='nav-element'>Nav 01</div>
                <div className='nav-element'>Nav 02</div>
                <div className='nav-element'>Nav 03</div>
            </div>
            <div className='account'>
                <img src={usericon} />
                <div className='account-info'>My Account</div>
            </div>
        </div>
    )
}

export default Header