'use client'
import { palette } from "@/style/color";
import { variants } from "@/utils/variants";
import { Grid, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
const PageHeader = ({headerText}) => {
   const contained = variants.button.contained;
   const onClickFilteredButton = () => {
    console.log("asd");
 }
  return (
    <>
    <Grid container>
    <Grid item xs={6} textAlign={"start"}>
    <Typography variant="h6" fontWeight="bold" >
     {headerText}
      </Typography>
    </Grid>
      <Grid item xs={6} sx={{ display:'flex', justifyContent:'end' }}>
        <CustomButton variant={contained} onClick = {onClickFilteredButton} buttonText = "Filter" 
        sx={{
          bgcolor: palette.grey[500],
          ':hover': {
            bgcolor: palette.grey[700]
          }
        }}
        />
        <CustomButton variant={contained} onClick = {onClickFilteredButton}  buttonText = "Create" 
        sx={{
          ml:1,
          bgcolor : palette.lightBlue[500],
          ':hover': {
            bgcolor: palette.lightBlue[700]
          }
        }}/>

      </Grid>
    </Grid>


    </>
  )
}

export default PageHeader