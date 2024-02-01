'use client'
import AutoCompleteCustom from '@/components/AutoCompleteCustom'
import TextFieldCustom from '@/components/TextFieldCustom'
import { palette } from '@/style/color'
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material'

export const VariationComponent = ({variation, variationsStatus, handleStatus, onClose }) => {

  return (
    <Grid container item xs={12} sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={11} sm={4}>
        <AutoCompleteCustom
          label="Select a variation"
          options={variationsStatus}
          onChange={handleStatus}
        />
      </Grid>
      <Grid item xs={12} sm={4} sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        mt: {
          xs: 1,
          sm:0,
          md:0
        },
        ml: {
          sm:1
        }
      }}>
        <TextFieldCustom
          placeholder="Variation" />
        <CloseIcon onClick={() => onClose(variation.id)}
         sx={{
          color:palette.red[400], 
          backgroundColor:palette.red[50],
          ml:1,
          borderRadius:1,
          p:1
        }} 
          />
      </Grid>
    </Grid>
  )
}
