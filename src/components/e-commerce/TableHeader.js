'use client'
import { palette } from '@/style/color'
import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import AutoCompleteCustom from '../AutoCompleteCustom'
import CustomButton from '../CustomButton'
import SearchInput from '../SearchInput'
const TableHeader = (props) => {
  const {autoCompleteLabel, productOptions} = props;
  const [status, setStatus] = useState();

  return (
    <>
  <Grid container>
   <Grid item xs={12} display={'flex'} p={3}>

    <Grid item xs={6}>
    <SearchInput />
  </Grid>
  <Grid item xs={6} display={'flex'} justifyContent={'flex-end'} gap={2}>
    <Box>
      <AutoCompleteCustom
        options={productOptions}
        value={status}
        label={autoCompleteLabel}
        size="small"
        onChange={(e, newValue) => setStatus(newValue)}
        sx={{
          bgcolor: palette.grey[100],
          width: 175
        }}
      />
    </Box>
    <Box>
      <CustomButton buttonText="Add Product" sx={{
        bgcolor: palette.lightBlue[500], 
        ':hover': {
          bgcolor: palette.lightBlue[700]
        }
      }} />
    </Box>
  </Grid>
  </Grid>
  </Grid>
  </>
  )
}

export default TableHeader