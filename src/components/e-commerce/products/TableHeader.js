'use client'
import { palette } from '@/style/color'
import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import AutoCompleteCustom from '../../AutoCompleteCustom'
import CustomButton from '../../CustomButton'
import SearchInput from '../../SearchInput'
const TableHeader = ({
  autoCompleteLabel,
  productOptions,
  tableHeaderButtonText,
  searchInputText
}) => {

  const [status, setStatus] = useState();
  const filterProductOptions = productOptions.filter(option => option.label !== 'Draft');

  return (
    <>
      <Grid container>
        <Grid item xs={12} display={'flex'} p={3}>

          <Grid item sx={{
            backgroundColor: 'aliceblue',
            display: 'flex'
          }}>
            <SearchInput 
              searchInputText={searchInputText}
            />
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
            <Box sx={{
              display: 'flex',
              width: {
                xs: 100,
                md: 170,
                lg: 170
              }
            }}>
              <AutoCompleteCustom
                options={filterProductOptions}
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
            <Box sx={{
              ml: 1,
              display: 'flex',
              width: {
                xs: 100,
                md: 170,
                lg: 170
              },

            }}>
              <CustomButton buttonText={tableHeaderButtonText} 
              sx={{
                bgcolor: palette.lightBlue[500],
                ':hover': {
                  bgcolor: palette.lightBlue[700],
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