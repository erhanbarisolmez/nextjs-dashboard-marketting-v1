'use client'
import Card from '@/components/e-commerce/Card'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import CheckBoxJoy from '../CheckBoxJoy'
import IncrementDecrementTextField from '../InputAdornment'
import { TabHeader } from '../TabHeader'
import { TextFieldCard } from '../TextFieldCard'


export const Shipping = () => {
 
  const [isOpen, setOpen] = useState();
  const [isChecked, setChecked] = useState(true);
  
  const onChangeChecked = () => {
    setChecked(!isChecked);
  }


  return (
    <Card>
      <Container sx={{ mt: 6, mb: 6 }}>
        <TabHeader
          headerTextField='Shipping'
        />
        <CheckBoxJoy
          label='This is a physical product'
          text='Set if the product is a physical or digital item. Physical products may require shipping.'
          defaultChecked
          onClick={onChangeChecked}
          sx={{
            fontSize: 16,
            color: 'grey',
            opacity: 0.6,
            mt: 3,
          }}
        />
        {isChecked && (
          <>
            <TextFieldCard
              textHeader="Weight"
              textColorHeader=' '
              textFieldPlaceHolder="Product weight"
              textBottom="Set a product weight in kilograms (kg)."
            />
            <Grid container spacing={2}
             sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
      
            }}>
              <Grid item xs={12} sm={4} sx={{}}>
                <TextFieldCard
                  InputProps = {{
                    type:  "number"                    
                  }}
                  textHeader='Dimension'
                  textColorHeader=' '
                  textFieldPlaceHolder='Width (w)'
                  textBottom='Enter the product dimensions in centimeters (cm).'
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={{}}>
                <IncrementDecrementTextField 
                    placeholder = "Height (h)"
                    fullWidth
                /> 
              </Grid>
              <Grid item xs={12} sm={4} sx={{}}>
              <IncrementDecrementTextField 
                    placeholder = "Length (l)"
                    fullWidth
                  
                /> 
              </Grid>

            </Grid>
          </>
        )}
      </Container>
    </Card>

  )
}
