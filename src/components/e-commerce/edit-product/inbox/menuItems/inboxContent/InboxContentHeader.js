import { TabHeader } from "@/components/e-commerce/TabHeader";
import { useStyles } from "@/style/Inbox/iconStyles";
import { palette } from "@/style/color";
import {
  PrintOutlined as PrintIcon,
  SwapVertOutlined as SwapIcon
} from '@mui/icons-material/';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';

export const InboxContentHeader = () => {
  const headerText = "Trip Reminder. Thank you for flying with us!"
  const classes = useStyles();
  return (
    <>
    <Grid container  sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      mt:3
     
    }}>
      <Grid item xs ={4}>
      <TabHeader
          level="title-lg"
          headerTextField={headerText}
        />
      </Grid>

          <Grid item xs={4} sx={{ display:'flex', flexDirection:'row',  justifyContent:'flex-start'}}>
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

    
          <Grid item  xs={4}  sx={{display:'flex', justifyContent:'flex-end'}}>
          <SwapIcon className={classes.icon} />
          <PrintIcon className={classes.icon} />
          </Grid>
          </Grid>
    </>
  )
}
