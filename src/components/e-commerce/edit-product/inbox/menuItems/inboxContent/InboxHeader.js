'use client'
import { palette } from '@/style/color';
import {
  ArrowBackOutlined as ArrowIcon,
  KeyboardArrowLeftOutlined as ArrowLeftIcon,
  KeyboardArrowRightOutlined as ArrowRightIcon,
  DeleteOutlineOutlined as DeleteIcon,
  ExitToAppOutlined as ExitIcon,
  MailOutlineOutlined as MailIcon,
  MoreHorizOutlined as MoreIcon,
  ChromeReaderModeOutlined as ReaderIcon,
  NewReleasesOutlined as ReleasesIcon
} from '@mui/icons-material';
import Divider from '@mui/joy/Divider';
import { Grid } from '@mui/material';
export const InboxHeader = () => {
  return (
    <>
      <Grid item xs={12}
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',

        }}>
        <Grid container item xs={6}
          sx={{
            display: "flex",
            justifyContent: 'flex-start',
            gap: 2,
            alignContent: 'center',
            alignItems: 'center',
            color: palette.grey[700],
          
          }}
        >
          <Grid><ArrowIcon fontSize="medium" /></Grid>
          <Grid><MailIcon style={style.icon} /></Grid>
          <Grid><ReleasesIcon style={style.icon} /></Grid>
          <Grid><DeleteIcon style={style.icon} /></Grid>
          <Grid><ReaderIcon style={style.icon} /></Grid>
          <Grid><ExitIcon style={style.icon} /></Grid>

        </Grid>
        <Grid container item xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2
          }}
        >
          <Grid item sx={{ p: 0.8, fontSize: 13, color: palette.grey[600] }}>1 - 50 of 235</Grid>
          <Grid item><ArrowLeftIcon style={style.icon} /></Grid>
          <Grid><ArrowRightIcon style={style.icon} /></Grid>
          <Grid><MoreIcon style={style.icon} /></Grid>
        </Grid>
      </Grid>
      <Divider orientation="horizontal"
        sx={{
          display: 'flex',
          width: '100vw',
          ml: -5,
          mt: 3
        }} />

    </>
  )
}

const style = ({
  icon: {
    display: 'flex',
    backgroundColor: palette.grey[100] + "!important",
    color: palette.grey[700],
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
    hover:{
      color:palette.lightBlue[50]
    }
  }
});
