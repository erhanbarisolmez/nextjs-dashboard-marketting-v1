import { TabHeader } from "@/components/e-commerce/TabHeader";
import { palette } from "@/style/color";
import {
  PrintOutlined as PrintIcon,
  SwapVertOutlined as SwapIcon
} from '@mui/icons-material/';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';

export const InboxContentHeader = () => {
  const headerText = "Trip Reminder. Thank you for flying with us!"

  return (
    <>
     <Grid item container
        sx={{
          display: 'flex',
          alignItems:'center',
          justifyContent:'space-evenly'
        }}>
        <TabHeader
          level="title-lg"
          headerTextField={headerText}
          sx={{
            mt: 3,
            justifyContent:'start'
          }}
        />
        <Grid item xs = {2}  sx={{
          display: 'flex',
          justifyContent: 'space-around',
          mt: 3
        }}>
          <Typography
            level="body-sm"
            sx={{
              backgroundColor: palette.lightBlue[100],
              p: 1,
              borderRadius: 5,
              maxHeight: 20,
              color: palette.lightBlue[300]
            }}
          >
            inbox
          </Typography>

          <Typography
            level="body-sm"
            sx={{
              backgroundColor: palette.red[100],
              p: 1,
              borderRadius: 5,
              maxHeight: 20,
              color: palette.red[300],
              ml:1
            }}
          >
            important
          </Typography>

        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3}}>

          <Grid item xs={2}><SwapIcon sx={{ color: "GrayText" }} /></Grid>
          <Grid item xs={2}><PrintIcon sx={{ color: "GrayText", ml:1 }} /></Grid>

        </Grid>

      </Grid>
    </>
  )
}
