import { palette } from '@/style/color';
import { Button, Grid, Paper, Typography } from '@mui/material';
const OrderSummaryCard = (props) => {
  const {
    orderSummaryCardHeader,
    orderSummaryCardMonth,
    orderSummaryCardButtonText
  } = props;
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} sx={{
        display: 'flex',
        mt: 2,
      }}>
        <Paper xs={12} sx={{
          display: 'flex',
          backgroundColor: palette.grey[200],
          color: 'gray',
          borderRadius: 3,
          width: '100%',
          minHeight: 300,

        }}
        >
          <Grid item xs={12} sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 2,
            ml: 2,
            mr: 2,
          }}>

            <Grid item xs={12} mt={2}>
              <Typography>
                {orderSummaryCardHeader}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
              }}>
                <Typography variant='h2' fontWeight={"bold"} mb={6}>
                  $59.99
                </Typography>
                <Typography variant='subtitle2' ml={1} mt={5}>
                  {orderSummaryCardMonth}
                </Typography>
              </Grid>

            </Grid>
            <Grid item xs={12} >
              <Button
                variant='outlined'
                sx={{
                  color: palette.deepPurple[600],
                  borderColor: palette.deepPurple[600],
                  ":active": {
                    color: palette.deepPurple[400],
                    borderColor: palette.deepPurple[400]
                  },
                  ":hover": {
                    color: palette.deepPurple[700],
                    borderColor: palette.deepPurple[700],

                  },
                }}
                fullWidth
              >
                {orderSummaryCardButtonText}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default OrderSummaryCard