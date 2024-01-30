import SparklineChart from '@/components/SparklineChart'
import { palette } from '@/style/color'
import { Grid, Typography } from "@mui/joy"
import { Container } from '@mui/material'
export const AverageDailySales = ({statusOptions}) => {
  const data = [10, 40, 50, 20, 10, 20, 50, 60, 50];
  return (

    <Grid container spacing={2}  >
      <Container>
        <Grid item xs={7} sx={{  display:'flex', mt: 6,  justifyContent:'space-evenly',flexDirection:'row'}}>
            <Typography variant="plain" level="body-lg" sx={{
              color: palette.grey[500],
              display:'flex',
            }}>
              $
            </Typography>
            <Typography variant="plain" level="h1" display={'flex'} >
              2,420
            </Typography>
            <Typography variant="outlined" level="body-sm" sx={{
              backgroundColor: palette.lightGreen[50],
              color: palette.lightGreen[700],
              fontWeight: '600',
              borderRadius: "9px",
              textAlign: 'center',
              ml:0.3,
              p:1,
              width:'30%',height:'10px',
              justifyContent:'center',
              alignItems:'center',
              display:'flex'
            
            }}>
              ^ 2.6 %
            </Typography>



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
