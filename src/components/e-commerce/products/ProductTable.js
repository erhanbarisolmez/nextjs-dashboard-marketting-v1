import { Grid, Paper } from '@mui/material';
import ProductTableContent from './ProductTableContent';
import TableHeader from './TableHeader';
const ProductTable = async(props) => {
  const {
    productOptions,
    autoCompleteLabel
    
  } = props;
  
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