import SparklineChart from '@/components/SparklineChart'
import { palette } from '@/style/color'
import { Grid, Typography } from "@mui/joy"
import { Container } from '@mui/material'
export const AverageDailySales = (statusOptions) => {
  const data = [10, 40, 50, 20, 10, 20, 50, 60, 50]
  return (

    <Grid container spacing={2} >
      <Container>
        <Grid item xs={12} sx={{ display: 'flex', mt: 6, width: '100%', }}>
          <Grid item xs={1} sx={{
            display: 'flex',
            justifyContent: 'left',
          }}>
            <Typography variant="plain" level="body-lg" sx={{
              color: palette.grey[500]
            }}>
              $
            </Typography>

          </Grid>
          <Grid item xs={4} sx={{
            width: '30%'
          }}>
            <Typography variant="plain" level="h1" >
              2,420
            </Typography>
          </Grid>
          <Grid item xs={7} sx={{

            height: '100%',
            alignItems: 'center',
            justifyContent: 'start',
            display: 'flex',
            mt: 1,
            width: '30%',
          }}>
            <Typography variant="outlined" level="body-sm" sx={{
              backgroundColor: palette.lightGreen[50],
              color: palette.lightGreen[700],
              fontWeight: '600',
              borderRadius: "9px",
              textAlign: 'left',

            }}>
              ^ 2.6 %
            </Typography>
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <Typography variant="plain" level="h6" sx={{
            color: palette.grey[500]
          }}>
            Average Daily Sales
          </Typography>
          <SparklineChart
            data={data}
            height={100}
            colors={["#61ffb1"]}
          />
        </Grid>
      </Container>
    </Grid>
  )
}
