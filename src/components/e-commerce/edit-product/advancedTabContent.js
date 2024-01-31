import { Grid } from '@mui/material'
import { Variations } from './Variations'
import { Inventory } from './inventory'
export const AdvancedTabContent = ({ variationsStatus}) => {
  return (
    <>
      <Grid container gap={4} flexDirection={'column'}>
         
        {/* INVENTORY */}
        <Inventory />
        <Variations 
         variationsStatus ={variationsStatus}
        />
      </Grid>
    </>
  )
}
