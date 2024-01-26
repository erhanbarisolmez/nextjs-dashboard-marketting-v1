import AutoCompleteCustom from "@/components/AutoCompleteCustom"
import TextFieldCustom from "@/components/TextFieldCustom"
import { Grid } from "@mui/material"
import { TabHeader } from "../TabHeader"
export const NoDiscount = () => {
  return (
    <>
      <Grid container xs={12} >

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', }}>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }}>
            <TabHeader
              level="body-sm"
              titleTextField="Tax Class"
              sx={{ mt: 2 }}
            />
            <TabHeader
              level="body-sm"
              colorText=" *"
              sx={{ mt: 2, ml: 1 }}
            />
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }}>

            <TabHeader
              level="body-sm"
              titleTextField="VAT Amount (%)"
              sx={{ mt: 2, ml: 1 }}
            />

          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} >

        <Grid item xs={6}>
          <AutoCompleteCustom />
        </Grid>

        <Grid item xs={6} >
          <TextFieldCustom />
        </Grid>
        <Grid xs={12} display={'flex'} >
          <Grid xs={6}>
          <TabHeader
            level="body-xs"
            text="Set the product tax class."
            sx={{ opacity: 0.6, ml:2 }}
          />
          </Grid>
          <Grid xs={6}>
          <TabHeader
            level="body-xs"
            text="Set the product tax class."
            sx={{ opacity: 0.6, ml:2}}
          />
          </Grid>

        </Grid>
        
      </Grid>
      



    </>
  )
}
