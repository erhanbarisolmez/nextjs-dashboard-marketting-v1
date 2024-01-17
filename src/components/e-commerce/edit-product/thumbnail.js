import { TypographyCustom } from '@/components/TypographyCustom'
import { Box, Container, Grid } from '@mui/material'
const Thumbnail = () => {
  return (
    <Container >
      <Grid container spacing={2}  >
        <Grid item xs={12} mt={6} sx={{
          display:'flex',
          flexDirection:'column',
          height:"40vh"
        
        }}>
          <Grid item xs={12} >
            <TypographyCustom 
              variant="h6"
              text="Thumbnail" 
              fontWeight="bold"
              />
          </Grid>
          <Grid item xs={12} sx={{ width:'100%', alignContent:'center', display:'flex', justifyContent:'center', alignItems:'center'}}>
           <Grid item xs={12} sx={{
          display:'flex',
          justifyContent:'center',
           }}>
            <Box sx={{display:'flex', backgroundColor:"gray", opacity:'0.3', minWidth:200,minHeight:200, alignItems:'center', justifyContent:'center',}}>
            img
            </Box>
          </Grid>
          </Grid>

          <Grid item xs={12} mt={2}>
            <TypographyCustom 
            variant="subtitle2"
              text = "Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted"
              sx={{
                textAlign:'center',
                color:"gray",
                opacity:0.7
              }}
            />
          </Grid>
          </Grid>


      </Grid>
    </Container>

  )
}

export default Thumbnail