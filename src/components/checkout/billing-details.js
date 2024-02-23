import { Grid } from '@mui/material';
import React from 'react';
import AutoCompleteCustom from '../AutoCompleteCustom';
import TextFieldCustom from '../TextFieldCustom';


const BillingDetails = (props) => {
  const  {
    billingEmailPlaceHolder,
    billingPasswordPlaceHolder,
    billingZipPlaceHolder,
    billingCountries,
    billingCountriesLabel
   } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState();
  const [postalCode, setPostalCode] = React.useState("");
  return (
    <Grid container item spacing={2} xs={12} mt={2}>
      <Grid item xs={6}>
        <TextFieldCustom
          id="email"
          variant="outlined"
          placeholder={billingEmailPlaceHolder}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextFieldCustom
          id="password"
          variant="outlined"
          placeholder={billingPasswordPlaceHolder}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <AutoCompleteCustom
          options={billingCountries}
          sx={{ width: '100%' }}
          label={billingCountriesLabel}
          value={country}
          onChange={(_, newValue) => setCountry(newValue)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFieldCustom
          id="postal-code"
          variant="outlined"
          placeholder={billingZipPlaceHolder}
          onChange={(e) => setPostalCode(e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default BillingDetails;