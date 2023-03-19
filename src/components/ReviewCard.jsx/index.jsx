import React from 'react'
import CustomRating from '../CustomRating'
import './index.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ReviewCard = () => {
  return (
    <div className="rc">
        <div className="rc-user"><AccountCircleOutlinedIcon />{' '}Jack Reacher (Verified)</div>
        <div className="rc-content">
        <div className="rc-head">Visited for Jaw Reshaping</div>
        <CustomRating value={4} />
        <div className="rc-body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
    </div>
  )
}

export default ReviewCard