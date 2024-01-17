import Card from '@/components/e-commerce/Card'
import { Grid } from '@mui/material'
import { Status } from './status'
import Thumbnail from './thumbnail'
const EditProductContent = () => {
  return (

    <Grid container item xs={12} spacing={2}  mt={2} sx={{  }}>
      <Grid item xs={12} md={3}>
        <Card >
          <Thumbnail />
        </Card>

        <Card mt={2} sx={{ height: 200}}>
          <Status />
        </Card>
      </Grid>
      <Grid item xs={12} md={9}>
          <Card>
            a
          </Card>
      </Grid>

    </Grid>
  )
}

export default EditProductContent