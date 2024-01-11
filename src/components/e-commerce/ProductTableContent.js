'use client'
import { palette } from '@/style/color';
import {
  ComputerOutlined as ComputerIcon,
} from '@mui/icons-material';
import { Box, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const ProductTableContent = () => {
  const icons = {
    computer: <ComputerIcon sx={{color:palette.red[300]}} />
  }
  const columns = [
    { field: 'product', headerName: 'PRODUCT', width: 200, renderCell: (params) => (
      <Grid container>
        <Grid item xs={2} 
        style={{
          backgroundColor:palette.grey[100]}} 
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'} 
          borderRadius={2}
         >
        {params.row.icon}
        </Grid>
        <Grid item ml={3}>
          {params.row.product}
        </Grid>
          
      </Grid>
    
      )},
    {
      field: 'sku',
      headerName: 'SKU',
      editable: true,
    },
    {
      field: 'qty',
      headerName: 'QTY',
      editable: true,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      type: 'number',

      editable: true,
    },
    {
      field: 'rating',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, icon: icons.computer, product: "asd" ,firstName: 'Jon', age: 14 },
    { id: 2, product: 'Product 2', firstName: 'Cersei', age: 31 },
    { id: 3, product: 'Product 3', firstName: 'Jaime', age: 31 },
    { id: 4, product: 'Product 4', firstName: 'Arya', age: 11 },
    { id: 5, product: 'Product 5', firstName: 'Daenerys', age: null },
    { id: 6, product: 'Product 6', firstName: null, age: 150 },
    { id: 7, product: 'Product 7', firstName: 'Ferrara', age: 44 },
    { id: 8, product: 'Product 8', firstName: 'Rossini', age: 36 },
    { id: 9, product: 'Product 9', firstName: 'Harvey', age: 65 },
  ];
  
  return (
    <>
    <Grid container >
    <Grid item xs={12} display={'flex'} p={3}>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>

    </Grid>
    </Grid>
    </>
  )
}

export default ProductTableContent