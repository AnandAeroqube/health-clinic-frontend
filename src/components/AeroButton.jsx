import React from 'react'
import '../assets/styles/aerobutton.css'

function AeroButton(props) {
  return (
    <div className='aero-button'>{props.buttontext}</div>
  )
}

export default AeroButton