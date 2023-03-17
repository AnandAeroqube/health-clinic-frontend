import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function CustomRating({value}) {

  return (
    <Box
      sx={{
        maxWidth: 200,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: '2px 8px',
        margin: '30px 2px',
        width: 'fit-content',
      }}
    >
      {value !== null && (
        <Box sx={{ ml: 2, fontWeight: 500, marginLeft: 0, marginRight: '16px', color: '#0d134e' }}>{labels[value]}</Box>
      )}
      <Rating
        name="read-only"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        readOnly
        style={{color: '#0d134e'}}
        emptyIcon={<StarIcon style={{ opacity: 0.45 }} fontSize="inherit" />}
      />
    </Box>
  );
}