'use client'
import { Box, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { TableGlobal } from '../TableGlobal';

const ProductTableContent = ({
  productTableStatus,
  actionProductTable,
  productColumnName,
  actionLabel
}) => {

  const router = useRouter();
  const actionChange = handleActionChange();

  const { rows, columns} = TableGlobal({productTableStatus, productColumnName, actionLabel, actionProductTable,actionChange});



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

  function handleDelete(){
    return(console.log("silindi"));
  }

  function handleActionChange() {
    return (newAction, selectedValue, selectedRowId) => {
      const select = rows.map((row) => row.id);
      if (newAction === "edit") {
        // Navigate to the edit page using history.push   
        router.push(`edit-product`);
        console.log("edit", newAction);

      } else if (newAction === "delete") {
        // Handle the delete action
        handleDelete(select.id);
        console.log("delete");
      }else if (newAction === "sil"){
        handleDelete(select.id)
      }
     else  if (newAction === "düzenle"){
      router.push(`urun-duzenle`);
      console.log("urun-duzenle", newAction)
      }
    };
  }


}

export default ProductTableContent