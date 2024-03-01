'use client'
import { Grid, Paper } from '@mui/material';
import TableHeader from '@/components/e-commerce/products/TableHeader'
const CategoriesTable = ({
  productOptions,
  autoCompleteLabel,
  tableHeaderButtonText,
  searchInputText
}) => {


  const status = {
    published: "Published",
    inactive: "Inactive",
    scheduled: "Scheduled"
  }

  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          <TableHeader
            productOptions={productOptions}
            autoCompleteLabel={autoCompleteLabel}
            tableHeaderButtonText={tableHeaderButtonText}
            searchInputText = {searchInputText}
            autoCompleteButtonShowTrue = {false}
          />
        </Paper>
      </Grid>

    </Grid>
  )
}

export default CategoriesTable
