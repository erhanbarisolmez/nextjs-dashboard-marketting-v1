import Slider from '@mui/joy/Slider';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { TabHeader } from '../TabHeader';
import { NoDiscount } from './noDiscount';
export const SliderCustom = ({...otherProps}) => {
  return (
    <>
      <Slider
        color="neutral"
        disabled={false}
        marks={false}
        size="lg"
        valueLabelDisplay="off"
        variant="soft"
        {...otherProps}
      />
    </>
  )
}

export const Percentage = ({taxStatus}) => {
  const [number, setNumber] = useState(0);
  const numberChange = (event, newValue) => {
    setNumber(
      newValue
    )
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TabHeader
            level='body-sm'
            text={'Set Discount Percentage'}
          />
        </Grid>

        <Grid item xs={12} sx={{justifyContent:'center', display:'flex'}}>
           <TabHeader 
            level="h1"
            text={number}
            sxTitleTextField={{
            fontSize:23
            }}
            titleTextField={"%"}
           /> 
          
        </Grid>

        <SliderCustom
          value ={number}
          onChange={numberChange}
        />
        <TabHeader 
          level="body-xs"
          text="Set a percentage discount to be applied on this product."
          sx={{opacity:0.6}}
        />

        <NoDiscount taxStatus={taxStatus} />
      </Grid>
    </>
  )
}
