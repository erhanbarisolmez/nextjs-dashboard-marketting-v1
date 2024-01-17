import AutoCompleteCustom from '@/components/AutoCompleteCustom';
import { TypographyCustom } from '@/components/TypographyCustom';
import CircleIcon from '@mui/icons-material/Circle';
import { Container, Grid } from '@mui/material';
export const Status = () => {
  return (
    <Container>
    <Grid container spacing={2} >
      <Grid item xs={12} mt={6} sx={{
        display:'flex',
        justifyContent: 'space-around',
      }}> 

      <Grid item xs={10}>
        <TypographyCustom 
          variant="h6"
          text="Status"
          fontWeight="bold"
        />
      </Grid>

      <Grid item xs={2} sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'end'
      }}>
       <CircleIcon fontSize='small' />
      </Grid>
      </Grid>

      <Grid item xs={12}>
        <AutoCompleteCustom />
      </Grid>
      <Grid item xs={12}>
        <TypographyCustom 
          variant="subtitle2"
          text= "Set the product status."
          sx={{opacity:0.7, color:'gray'}}
        />
      </Grid>
    </Grid>
    </Container>
  )
}
