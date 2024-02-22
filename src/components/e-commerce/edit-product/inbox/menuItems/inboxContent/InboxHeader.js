'use client'
import { useStyles } from "@/style/Inbox/iconStyles";
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
  const classes = useStyles();
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
          <Grid><ArrowIcon onClick={() => { console.log('back') }} className={classes.icon} />
          </Grid>
          <Grid><MailIcon className={classes.icon} /></Grid>
          <Grid><ReleasesIcon className={classes.icon} /></Grid>
          <Grid><DeleteIcon className={classes.icon} /></Grid>
          <Grid><ReaderIcon className={classes.icon} /></Grid>
          <Grid ><ExitIcon className={classes.icon} /></Grid>

        </Grid>
        <Grid container item xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2
          }}
        >
          <Grid item sx={{ p: 0.8, fontSize: 13, color: palette.grey[600] }}>1 - 50 of 235</Grid>
          <Grid item><ArrowLeftIcon className={classes.icon} /></Grid>
          <Grid><ArrowRightIcon className={classes.icon} /></Grid>
          <Grid><MoreIcon className={classes.icon} /></Grid>
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


