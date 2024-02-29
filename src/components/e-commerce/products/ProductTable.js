'use client'
import TableHeader from '@/components/e-commerce/products/TableHeader';
import { Grid, Paper } from '@mui/material';
import ProductTableContent from './ProductTableContent';
const ProductTable = ({
  productOptions,
  autoCompleteLabel,
  tableHeaderButtonText,
  searchInputText
}) => {

  
  const status = {
    published : "Published",
    inactive : "Inactive",
    scheduled: "Scheduled"
  }  


  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          {/* TABLE HEADER */}
            <TableHeader 
            productOptions = {productOptions}
            autoCompleteLabel = {autoCompleteLabel}
            tableHeaderButtonText={tableHeaderButtonText}
            searchInputText={searchInputText}
            />
            {/* PRODUCT TABLE CONTENT */}
            <ProductTableContent 
              status = {status}
            />
      
        </Paper>
      </Grid>

    </Grid>
  )
}

export default ProductTable