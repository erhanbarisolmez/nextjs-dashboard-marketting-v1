'use client'
import { Container, Divider, Grid, Paper, useMediaQuery } from '@mui/material';
import Checkout from './check-out';
import OrderSummary from './order-summary';
const CheckoutPage = (props) => {
  const isMdScreen = useMediaQuery('(min-width:1200px)');
  const {
    checkOutHeader,
    checkOutTitle,
    checkOutTitle2,
    checkOutCardName,
    checkOutCardName2,
    billingHeader,
    creditCardHeader,
    billingEmailPlaceHolder,
    billingZipPlaceHolder,
    billingPasswordPlaceHolder,
    billingCountries,
    billingCountriesLabel,
    creditCardNumberPlaceholder,
    creditCardHolderPlaceholder,
    creditCardEXPDatePlaceholder,
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
      <Grid item xs={12} sx={{
        color: 'gray',
      }}>
        <Paper elevation={2} sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'start',
          justifyItems: 'center',
          borderRadius: 5,
          minHeight: '85vh',
          width: '100%',
        }}>
          <Container maxWidth="full" xs={12}>
            <Grid item sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'start',
              height: { xs: '100%', lg: '100%' },
              width: '100%',
              gap: 2,
            }}>
              <Grid xs={12} sm={12} md={12} lg={8} item sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                height: '100%',
                width: { xs: '100%', lg: '70%' },
                mt: 2,
              }}>

                <Checkout
                  checkOutHeader={checkOutHeader}
                  checkOutTitle={checkOutTitle}
                  checkOutTitle2={checkOutTitle2}
                  checkOutCardName={checkOutCardName}
                  checkOutCardName2={checkOutCardName2}

                  billingHeader={billingHeader}
                  billingEmailPlaceHolder={billingEmailPlaceHolder}
                  billingZipPlaceHolder={billingZipPlaceHolder}
                  billingPasswordPlaceHolder={billingPasswordPlaceHolder}
                  billingCountries={billingCountries}
                  billingCountriesLabel={billingCountriesLabel}

                  creditCardHeader={creditCardHeader}
                  creditCardNumberPlaceholder={creditCardNumberPlaceholder}
                  creditCardHolderPlaceholder={creditCardHolderPlaceholder}
                  creditCardEXPDatePlaceholder={creditCardEXPDatePlaceholder}

                />
              </Grid>

              {(isMdScreen) ? (
                <Divider orientation='vertical' />
              ) : (
                <Divider orientation='horizontal' />
              )}

              <Grid item xs={12} sm={12} md={12} lg={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'right',
                width: { xs: '100%', lg: '30%' },
                mt: 2,
              }}>

                <OrderSummary
                  orderSummaryHeaderName={orderSummaryHeaderName}
                  orderSummaryTitle={orderSummaryTitle}
                  orderSummaryTitle2={orderSummaryTitle2}
                  totalSubtotal={totalSubtotal}
                  totalTax={totalTax}
                  totalTotal={totalTotal}
                  orderSummaryButtonText={orderSummaryButtonText}
                  orderSummaryFooterText={orderSummaryFooterText}
                  orderSummaryCardHeader={orderSummaryCardHeader}
                  orderSummaryCardMonth ={orderSummaryCardMonth}
                  orderSummaryCardButtonText ={orderSummaryCardButtonText}
                />

              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </>

  )
}

export default CheckoutPage