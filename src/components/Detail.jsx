import React from 'react'
import '../assets/styles/detail.css'

function Detail({detailInfo}) {
  return (
    <div className='detail'>
        <h1>{detailInfo}</h1>
    </div>
  )
}

export default Detail