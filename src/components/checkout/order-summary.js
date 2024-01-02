import { palette } from '@/style/color'
import { Button, Divider, Grid, Typography } from '@mui/material'
import { CardHeader } from '../dashboard/sales-cards'
import OrderSummaryCard from './order-summary-card'
import { Totals } from './totals'
const OrderSummary = (props) => {
  const {
    orderSummaryHeaderName,
    orderSummaryTitle,
    orderSummaryTitle2,
    totalSubtotal,
    totalTax,
    totalTotal,
    orderSummaryButtonText,
    orderSummaryFooterText,
    orderSummaryCardHeader,
    orderSummaryCardMonth,
    orderSummaryCardButtonText
  } = props;
  return (
    <>

      {/* HEADER */}
      <Grid  item xs={12}  sx={{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        
      }}>
        <Grid item xs={12} sx={{
          color: 'gray',
        }}>
          <CardHeader
            headerName={orderSummaryHeaderName}
            headerTitle={
              <>
                <Typography>{orderSummaryTitle}</Typography>
                <Typography>{orderSummaryTitle2}</Typography>
              </>
            }
          />
        </Grid>
        {/*CARD */}
        <Grid item xs={12}>
          <OrderSummaryCard 
            orderSummaryCardHeader={orderSummaryCardHeader}
            orderSummaryCardMonth={orderSummaryCardMonth}
            orderSummaryCardButtonText={orderSummaryCardButtonText}
          />
        </Grid>
        {/* TOTAL */}
        <Grid  item xs={12} mt={2} sx={{
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          
        }}>
         <Totals 
          text={totalSubtotal}
          total="$85.99"
         />
         <Totals 
          text={totalTax}
          total="$4.99"
         />
         <Grid item xs={12} mt={2}>
         <Divider orientation='horizontal' />
         </Grid>
         <Totals 
          text={totalTotal}
          total="$90.98"
         />
        </Grid>
        <Grid item xs={12} mt={2}>
        <Button variant='contained' fullWidth sx={{
          backgroundColor:palette.lightGreen[400],
          height:50,
          ":hover":{
            backgroundColor:palette.lightGreen[500]
          }
        }}>{orderSummaryButtonText}</Button>
        </Grid>
        <Grid item xs={12} sx={{
          mt:2,
          color:"gray"
        }}>
          <Typography variant='subtitle2' mb={2}>
           {orderSummaryFooterText}
          </Typography>
        </Grid>
      </Grid>


    </>
  )
}

export default OrderSummary