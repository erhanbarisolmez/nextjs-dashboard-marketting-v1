import { Grid } from '@mui/material'
import { Variations } from './Variations'
import { Inventory } from './inventory'
import { MetaOptions } from './meta-options'
import { Shipping } from './shipping'
export const AdvancedTabContent = ({ variationsStatus}) => {
  return (
    <>
      <Grid container gap={4} flexDirection={'column'}>
         
        {/* INVENTORY */}
        <Inventory />
        <Variations 
         variationsStatus ={variationsStatus}
        />
        <Shipping />
        <MetaOptions />
      </Grid>
    </>
  )
}
