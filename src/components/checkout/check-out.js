
import { palette } from '@/style/color';
import { faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { CardHeader } from '../dashboard/sales-cards';
import BillingDetails from './billing-details';
import CheckoutCard from './check-out-card';
import CreditCardInfo from './credit-card-info';
const Checkout = (props) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const isCreditCardSelected = selectedPayment === 'creditCard' ? palette.deepPurple[300] : palette.grey[200];
  const isPaypalSelected = selectedPayment === 'paypal' ? palette.deepPurple[300] : palette.grey[200];
  const handlePaymentSelect = (method) => {
    console.log('selected payment method', method)
    setSelectedPayment(method);
  }
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
    creditCardEXPDatePlaceholder
  } = props;
  return (
    <>
      {/*HEADER */}
      <Grid container spacing={2} sx={{ color: "gray" }} >
        <Grid item xs={12} >
          <CardHeader
            headerName={checkOutHeader}
            headerTitle={
              <>
                <Grid item mt={2}>
                  <Typography >{checkOutTitle} </Typography>
                  <Typography>{checkOutTitle2}</Typography>
                </Grid>
              </>
            }
          />
        </Grid>
        {/*CARD */}
        <Grid item xs={12} mt={2} sx={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
          <Grid item xs={6} sx={{ border: 2, borderRadius: 2, borderColor: isCreditCardSelected }}>
            <CheckoutCard
              cardName={checkOutCardName}
              icon={faCcVisa}
              onSelect={() => handlePaymentSelect('creditCard')}
              value="creditCard"
              selectedValue={selectedPayment}
            />
          </Grid>

          <Grid item xs={6} ml={1} sx={{ border: 2, borderRadius: 2, borderColor: isPaypalSelected }}>
            <CheckoutCard
              cardName={checkOutCardName2}
              icon={faPaypal}
              onSelect={() => handlePaymentSelect('paypal')}
              value={"paypal"}
              selectedValue={selectedPayment}
            />
          </Grid>
        </Grid>

        {/*BILLING DETAILS*/}
        <Grid item xs={12} mt={2}>
          <Grid item xs={12}>
            <CardHeader
              headerName={billingHeader}
            />
          </Grid>

          <BillingDetails
            billingEmailPlaceHolder={billingEmailPlaceHolder}
            billingZipPlaceHolder={billingZipPlaceHolder}
            billingPasswordPlaceHolder={billingPasswordPlaceHolder}
            billingCountries={billingCountries}
            billingCountriesLabel={billingCountriesLabel}
          />

        </Grid>
        {/* CREDIT CARD INFO */}
        <Grid item xs={12} mt={2}>
          <Grid item xs={12}>
            <CardHeader
              headerName={creditCardHeader}
            />
          </Grid>

          <CreditCardInfo
            creditCardNumberPlaceholder={creditCardNumberPlaceholder}
            creditCardHolderPlaceholder={creditCardHolderPlaceholder}
            creditCardEXPDatePlaceholder = {creditCardEXPDatePlaceholder}
          />

        </Grid>
      </Grid>
    </>
  )
}

export default Checkout