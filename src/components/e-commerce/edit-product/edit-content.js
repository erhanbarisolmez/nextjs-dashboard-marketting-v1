import Card from '@/components/e-commerce/Card'
import { Grid } from '@mui/material'
import { AverageDailySales } from './average-daily-sales'
import { ProductDetails } from './product-details'
import { Status } from './status'
import Thumbnail from './thumbnail'
const EditProductContent = ({statusOptions}) => {

  return (

    <Grid container  spacing={2} mt={2}>

      <Grid item xs={12} lg={3}>
        <Card >
          <Thumbnail />
        </Card>

        <Card mt={2} sx={{ height: 200 }}>
          <Status 
          statusOptions={statusOptions}
     
          
          />
        </Card>

        <Card mt={2}>
          <ProductDetails  />
        </Card>

        <Card mt={2}>
          <AverageDailySales 
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={9} >
        <Card>
          a 
        </Card>
      </Grid>

    </Grid>
  )
}

export default EditProductContent