import { Box, Grid, Typography } from '@mui/material';

const GeneralCardHeader = ({ headerName, icon, headerTitle, percentile }) => {
  // const arrowIcon = colorTitle && colorTitle.includes('-') ? <ArrowDownIcon /> : <ArrowUpIcon />;
  // const arrowColor = colorTitle && colorTitle.includes("-") ? palette.red[500] : "#5BFF94";
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 6,
        color: "gray"
      }}>

        <Grid item xs={12}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'row',
          }}>
            <Grid item xs={12}>
              <Typography variant='h5' fontWeight="bold" >
                {headerName}
               
              </Typography>
              <Typography variant='subtitle2'>
          {headerTitle}
          </Typography>
            </Grid>
            <Grid item xs={2} sx={{
              display: 'flex',
              justifyContent: 'end',
            }}>
                <Typography variant='h6' display="flex" alignItems="center">
                  {percentile} 
                </Typography>
                <Typography variant='h6' display="flex" alignItems="center">
                 {icon}
                </Typography>
            </Grid>
          </Box>
        </Grid>

      </Box >



    </>
  )
}

export default GeneralCardHeader