'use client'
import { palette } from '@/style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import RadioButton from '../RadioButton';
const CheckoutCard = ({ cardName, icon, onSelect, value, selectedValue}) => {

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    const newSelected = selectedValue === 'creditCard' ? 'paypal' : 'creditCard';
    setSelected(newSelected);
    onSelect(newSelected);
  }

  return (
    <Grid container item xs={12} sx={{}}>
      <Paper xs={12} style={{
        display: 'flex',
        height: 60,
        textAlign: 'start',
        alignItems: 'center',
        width: '100%',
      
      }} >

        <Grid item xs={3} md={2} ml={2}>
          <RadioButton
            onSelect={handleSelect}
            value={value}
            selectedValue={selectedValue}
          />
          
        </Grid>
        <Grid item xs={3} md={1} sx={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: palette.grey[200],
          borderRadius: 3,
        }}>
          <FontAwesomeIcon
            icon={icon}
            style={{
              width: '30',
              height: '30',
              alignItems: 'center',
              color: palette.deepPurple[900]
            }} />

        </Grid>
        <Grid item xs={6} md={9}>
          <Typography
            variant='subtitle1'
            textAlign={'start'}
            alignItems={'center'}
            color={"gray"}
            ml={1}
          >
            {cardName}
          </Typography>
        </Grid>


      </Paper>
    </Grid>

  )
}

export default CheckoutCard