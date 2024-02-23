'use client'
import { TabHeader } from '@/components/e-commerce/TabHeader';
import { Avatar } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import { Grid, Typography } from "@mui/material";

export const CardOpen = ({
  handleClick,
  icon1,
  icon2,
  icon3,
  icon4,
  message,
  name,
  date,
  time,
  timeIcon
}) => {
  return (
    <Grid item container sx={{ display: 'flex', mt: 3 }}>
          <Grid item xs={6} onClick={handleClick} style={{ cursor: 'pointer' }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
              <Grid>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant='outlined' size='lg' sx={{}} />
              </Grid>
              <Grid item sx={{ fontWeight: 600 }} >
                {name}
              </Grid>
              <Grid item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  color: 'grey'
                }} >
                {timeIcon}
                {time}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{}}>

            <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              textAlign: 'center',
              color: 'gray',
            }}>
              <TabHeader
                titleTextField={date}
                level="body-sm"
                fontWeight={400}
              />

              <Grid item xs={4} sx={{
                display: 'flex',
                ml: 3,
                justifyContent: 'space-between',
              }}>
                {icon1}
                {icon2}
                {icon3}
                {icon4}
              </Grid>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3, color:"grey" }}>
            {message}
          </Typography>
          <Grid item xs={12}>
            <Divider orientation='horizontal' sx={{ mt: 3 }} />
          </Grid>

        </Grid>
  )
}
