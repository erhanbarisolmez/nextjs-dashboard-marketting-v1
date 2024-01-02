import { Grid, Typography } from '@mui/material';
export const Totals = (props) => {
  const {text, total} = props;
  return (
     <Grid item xs={12} sx={{
      display:'flex',
      justifyContent:'space-between',
      width:'100%',
      mt:2,
      color:'gray'
    }}>
      <Grid item xs={6} textAlign={'start'}>
        <Typography variant='subtitle1'>{text}</Typography>
      </Grid>
      <Grid item xs={6} textAlign={'end'}>
        <Typography variant='subtitle1'>{total}</Typography>
      </Grid>
    </Grid>
  )
}