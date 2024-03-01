import { palette } from '@/style/color';

import {
  ComputerOutlined as ComputerIcon,
} from '@mui/icons-material';

import { Box, Grid } from "@mui/material";
import AutoCompleteCustom from '../AutoCompleteCustom';
import BasicRating from '../Ratings';


// categories ve product için propslar oluşturulacak

export const TableGlobal = ({
  productTableStatus,
  productColumnName,
  actionLabel,
  actionProductTable,
  actionChange
}) => {
  const icons = {
    computer: <ComputerIcon sx={{ color: palette.red[300] }} />
  };

  const columns = [
    {
      field: "product", headerName: productColumnName.product.toUpperCase(), width: 200, renderCell: (params) => (
        <Grid container>
          <Grid item xs={2}
            style={{
              backgroundColor: palette.grey[100]
            }}
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

      )
    },
    {
      field: "sku",
      headerName: productColumnName.sku.toUpperCase(),
      editable: true,
      width: 150,
    },
    {
      field: "qty",
      headerName: productColumnName.qty.toUpperCase(),
      editable: true,
      width: 150,
    },
    {
      field: "price",
      headerName: productColumnName.price.toUpperCase(),
      type: 'number',
      editable: true,
      width: 150,
    },
    {
      field: "ratings",
      headerName: productColumnName.ratings.toUpperCase(),
      sortable: false,
      width: 150,
      renderCell: (params) => <BasicRating value={params.value} />
    },
    {
      field: "status",
      headerName: productColumnName.status.toUpperCase(),
      width: 150,
      renderCell: (params) => <Box sx={{
        p: 1,
        borderRadius: 2,
        color: params.value === productTableStatus.inactive
          ? palette.red[600]
          : params.value === productTableStatus.published
            ? palette.green[600]
            : palette.lightBlue[600],
        backgroundColor: params.value === productTableStatus.inactive
          ? palette.red[100]
          : params.value === productTableStatus.published
            ? palette.green[100]
            : palette.lightBlue[100],
        width: '50%',
        textAlign: 'center',
      }}>
        {params.value} {/* Render the actual status value here */}
      </Box>
    },
    {
      field: "actions",
      headerName: productColumnName.actions.toUpperCase(),
      width: 150,
      renderCell: (params) => <AutoCompleteCustom
        label={actionLabel}
        options={actionProductTable}
        value={params.value}
        onChange={actionChange} // Handle action selection
        rows={rows}
        fullWidth
        sx={{
          backgroundColor: palette.grey[100],
          ':hover': {
            backgroundColor: palette.lightBlue[100],
            color: palette.red[600],
          }
        }} />
    }
  ];

  const rows = [
    { id: 1, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 2, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.inactive },
    { id: 3, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.published },
    { id: 4, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 5, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 6, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 7, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 8, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
    { id: 9, icon: icons.computer, product: "Product", sku: '03639002', qty: 38, price: "36.00", rating: 3, status: productTableStatus.scheduled },
  ];
  return { rows, columns};
}
