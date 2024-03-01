import { Box, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import { TableGlobal } from "../TableGlobal";

export const CategoriesTableContent = () => {
  const  router = useRouter();

  // propslar alınacak ve gönderilecek
  const {columns,rows} = TableGlobal({});
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
