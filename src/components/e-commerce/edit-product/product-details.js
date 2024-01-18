import AutoCompleteAdvanced from '@/components/AutoCompleteAdvanced'
import { AutoCompleteTags } from '@/components/AutoCompleteTags'
import CustomButton from '@/components/CustomButton'
import { TypographyCustom } from '@/components/TypographyCustom'
import { palette } from "@/style/color"
import { variants } from '@/utils/variants'
import { Add } from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
export const ProductDetails = () => {
  const variantButton = variants.button.text;
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={6}>
          <TypographyCustom variant = "h6" text = "Product Details"  fontWeight = "bold"/>
        </Grid>
        <Grid item xs={12}>
          <AutoCompleteAdvanced />
        </Grid>
        <Grid item xs={12}>
          <CustomButton 
          variant = {variantButton}
          buttonText = "Create new category"
          startIcon = {<Add />}
          sx={{
            bgcolor: palette.lightBlue[50] ,
            color:palette.lightBlue[500],
            ":hover" :{
              backgroundColor: palette.lightBlue[600] + '!important',
              color: "white"
            }
          }}
          />
        </Grid>
        <Grid item xs = {12}>
          <AutoCompleteTags />

        </Grid>
      </Grid>

    </Container>
  )
}
