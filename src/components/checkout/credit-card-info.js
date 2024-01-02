import { Grid } from '@mui/material';
import TextFieldCustom from '../TextFieldCustom';
const CreditCardInfo = (props) => {
  const {
    creditCardNumberPlaceholder,
    creditCardHolderPlaceholder,
    creditCardEXPDatePlaceholder
  } = props;
  return (
    <Grid container item spacing={2} xs={12} mt={2}>
      <Grid item xs={12} >
        <TextFieldCustom
          id="card-number"
          variant="outlined"
          placeholder={creditCardNumberPlaceholder}
          fullWidth
        />
      </Grid>
      <Grid container item xs={12} spacing={2} >
        <Grid item xs={12} sm={6}>
          <TextFieldCustom
            id="card-holder"
            variant="outlined"
            placeholder={creditCardHolderPlaceholder}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextFieldCustom
            id="exp-date"
            variant="outlined"
            placeholder={creditCardEXPDatePlaceholder}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextFieldCustom
            id="cvv"
            variant="outlined"
            placeholder="CVV"
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreditCardInfo