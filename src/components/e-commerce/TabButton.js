import { palette } from "@/style/color";
import { variants } from "@/utils/variants";
import { Grid } from '@mui/material';
import CustomButton from "../CustomButton";
export const TabButton = () => {
  const buttonVariant = variants.button.text;

  return (
  <Grid item xs={12} display={'flex'} justifyContent={'end'}>
  <CustomButton
    variant={buttonVariant}
    buttonText="Cancel"
    sx={{ bgcolor: palette.grey[100], color: palette.grey[900] }}
  />
  <CustomButton
    buttonText="Save Change"

    sx={{ ml: 2, bgcolor: palette.lightBlue[500] }}
  />
</Grid>
  )
}
