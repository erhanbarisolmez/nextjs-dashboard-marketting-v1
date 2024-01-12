'use client'
import { palette } from '@/style/color';
import {
  ComputerOutlined as ComputerIcon,
} from '@mui/icons-material';
import { Box, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import AutoCompleteCustom from '../AutoCompleteCustom';
import BasicRating from '../Ratings';
const ProductTableContent = ({status}) => {
  const router = useRouter();
  const icons = {
    computer: <ComputerIcon sx={{color:palette.red[300]}} />
  }

  const action = [
   "edit",
   "delete"

  ]
  const handleActionChange = (newAction, row) => {
    if (newAction === "edit") {
      // Navigate to the edit page using history.push   
      router.push(`/edit-product`);
      
    } else if (newAction === "delete") {
      // Handle the delete action
      handleDelete(row);
    }
  };

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
      width: 150,
    },
    {
      field: 'qty',
      headerName: 'QTY',
      editable: true,
      width: 150,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      type: 'number',
      editable: true,
      width: 150,

    },
    {
      field: 'rating',
      headerName: 'RATINGS',
      sortable: false,
      width: 150,
      renderCell:(params) => <BasicRating  value={params.value}/>
      
    },
    {
      field: 'status',
      headerName: 'STATUS',
      width: 150,
      renderCell:(params) =><Box sx={{
        p: 1,
        borderRadius: 2,
        color: params.value === status.inactive
          ? palette.red[600]
          : params.value === status.published
          ? palette.green[600]
          : palette.lightBlue[600],
        backgroundColor: params.value === status.inactive
          ? palette.red[100]
          : params.value === status.published
          ? palette.green[100]
          : palette.lightBlue[100],
          width:'50%',
          textAlign:'center'
      }}>
        {params.value} {/* Render the actual status value here */}
      </Box>
    },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: 150,
      renderCell: (params) => <AutoCompleteCustom 
      label = "action"
      options = {action}
      value = {params.value}
      onChange={handleActionChange} // Handle action selection
      fullWidth
        sx={{
          backgroundColor:palette.grey[100],
          ':hover':{
            backgroundColor:palette.lightBlue[100],
            color:palette.red[600],
          }
        }}
      />
    
    }
  ];
  
  const rows = [
    { id: 1, icon: icons.computer, product: "Product" ,sku: '03639002', qty: 38, price: "36.00", rating:3, status:status.scheduled },
    { id: 2, product: 'Product 2', firstName: 'Cersei', age: 31, status:status.inactive },
    { id: 3, product: 'Product 3', firstName: 'Jaime', age: 31, status:status.published },
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