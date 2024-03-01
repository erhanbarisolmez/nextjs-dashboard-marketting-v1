
import TableHeader from '@/components/e-commerce/products/TableHeader';
import { Grid, Paper } from '@mui/material';
import { CategoriesTableContent } from '../categories/categoriesTableContent';
const ProductTable = ({
  productOptions,
  autoCompleteLabel,
  tableHeaderButtonText,
  searchInputText,

}) => {

  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          {/* TABLE HEADER */}
          <TableHeader
            productOptions={productOptions}
            autoCompleteLabel={autoCompleteLabel}
            tableHeaderButtonText={tableHeaderButtonText}
            searchInputText={searchInputText}
          />
          {/* Categories TABLE CONTENT */}
          <CategoriesTableContent 
          
          />

        </Paper>
      </Grid>

    </Grid>
  )
}

export default ProductTable