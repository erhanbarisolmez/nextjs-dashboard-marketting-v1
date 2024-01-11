'use client'
import { Grid, Paper } from '@mui/material';
import ProductTableContent from './ProductTableContent';
import TableHeader from './TableHeader';
const ProductTable = (props) => {
  const {
    productOptions,
    autoCompleteLabel
  } = props;
  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          {/* TABLE HEADER */}
            <TableHeader 
            productOptions = {productOptions}
            autoCompleteLabel = {autoCompleteLabel}
            />
            {/* PRODUCT TABLE CONTENT */}
            <ProductTableContent />
      
        </Paper>
      </Grid>

    </Grid>
  )
}

export default ProductTable