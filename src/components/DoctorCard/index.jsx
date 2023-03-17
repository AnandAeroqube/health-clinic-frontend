import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';

export default function DoctorCard({doctor}) {
  return (
    <Card sx={{ width: 345, fontFamily: 'inherit', borderRadius: '10px', margin: '10px 3vw', overflow:'visible', paddingBottom: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={doctor.photo}
          alt="green iguana"
        />
        <CardContent className='doctor-card' id='card-content'>
          <div className='doctor-card' id='doctor-name'>{doctor.name}</div>
          <div className='doctor-card' id='doctor-type'>{doctor.type}</div>
          <div className='doctor-card' id='doctor-experience'>{doctor.experience} {doctor.experience>1?'years':'year'} of experience</div>
          <div className='doctor-card' id='doctor-location'>{doctor.location}</div>
          <div className='doctor-card' id='doctor-clinics'>{doctor.clinics[0]}</div>
          <div className='doctor-card' id='doctor-fee'>${doctor.fee} Consultation fee at clinic</div>
        </CardContent>
      </CardActionArea>
      <CardActions  className='doctor-card' id='card-actions'>
        <div className='doctor-card' id='doctor-availability'>{doctor.available&&'Not '}Available Today</div>
        <Button variant="contained" className='doctor-card' id="appointment-button">
          Book your Appointment
        </Button>
      </CardActions>
    </Card>
  );
}