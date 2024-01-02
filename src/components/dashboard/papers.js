'use client'
import { palette } from '@/style/color';
import { Box, Divider, Grid, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import Images from '../Images';
import { CardHeader } from './sales-cards';
export default function PaperWrapper({ ...props }) {
  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100%',
        flexDirection: {
          xs: "column",
          md: 'row',
          lg: 'row'
        },
        spacing: 1
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: "column",
              md: 'row',
              lg: 'row'
            },

            flexWrap: 'wrap',
            '& > :not(style)': {
              width: '99%',
              height: {
                xs: "300px",
                sm: "300px",
                md: '300px',
                lg: '300px'
              },
              borderRadius: 5,

            },

          }}
        >
          <Paper elevation={3}>
            <CustomPaper
              headerName={props.ratingsHeaderName}
              headerTitleColor={props.ratingsHeaderTitleColor}
              headerTitleColorBackground={props.ratingsHeaderTitleColorBackground}
              headerTitle={props.ratingsHeaderTitle}
              total={props.ratingsTotal}
              percentile={props.ratingsPercentile}
              percentileTextColor={props.ratingsPercentileTextColor}
              image_src={props.ratingsImageSrc}
              image_height={props.ratingsImageHeight}
              image_width={props.ratingsImageWidth}
              image_alt={props.ratingsImageAlt}
            />
          </Paper>
          <Paper elevation={3} sx={{ mt: 1 }}>
            <TotalVisits
              headerName={props.totalVisitsHeaderName}
              percentile={props.totalVisitsPercentile}
              percentileIcon={props.totalVisitsPercentileIcon}
              total={props.totalVisitsTotal}
              leftIcon={props.totalVisitsLeftIcon}
              leftIconName={props.totalVisitsLeftIconName}
              leftIconPercentile={props.totalVisitsLeftIconPercentile}
              leftTotal={props.totalVisitsLeftTotal}
              rightIcon={props.totalVisitsRightIcon}
              rightIconName={props.totalVisitsRightIconName}
              rightIconPercentile={props.totalVisitsRightIconPercentile}
              rightTotal={props.totalVisitsRightTotal}
            />

          </Paper>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: "column",
              md: 'row',
              lg: 'row'
            },

            flexWrap: 'wrap',
            '& > :not(style)': {
              width: '99%',
              height: {
                xs: "300px",
                sm: "300px",
                md: '300px',
                lg: '300px',
              },
              borderRadius: 5,

            },


          }}
        >
          <Paper elevation={3} sx={{
            mt: {
              xs: 1,
              md: 0
            }
          }} >
            <CustomPaper
              headerName={props.sessionsHeaderName}
              headerTitleColor={props.sessionsHeaderTitleColor}
              headerTitleColorBackground={props.sessionsHeaderTitleColorBackground}
              headerTitle={props.sessionsHeaderTitle}
              total={props.sessionsTotal}
              percentile={props.sessionsPercentile}
              percentileTextColor={props.sessionsPercentileTextColor}
              image_src={props?.sessionsImageSrc}
              image_height={props?.sessionsImageHeight}
              image_width={props?.sessionsImageWidth}
              image_alt={props?.sessionsImageAlt}
            />
          </Paper>
          <Paper elevation={3} sx={{ mt: 1 }}>

            <CustomPaper
              headerName={props?.salesHeaderName}
              salesHeaderTitle={props?.salesHeaderTitle}
              salesTotal={props?.salesTotal}
              tinyLineChart={props?.salesTinyLineChart}

            />

          </Paper>
        </Box>
      </Box>


    </>
  );
}





export const CustomPaper = ({ ...props }) => {
  return (
    <Paper elevation={3} sx={{ width: '100%', height: '100%', borderRadius: 5 }}>
    <Stack spacing={{ xs: 1, sm: 2, }} direction="row" useFlexGap flexWrap="wrap">
      <Grid container sx={{ m: 6 }} justifyContent='space-evenly' position="flex">
        <Grid xs={12}>
          <Typography variant='h5' color='GrayText' fontWeight="bold">
            {props?.headerName}
          </Typography>
          <Typography variant='subtitle1' color='GrayText'>
            {props?.headerNameTitle}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant='subtitle2' color='GrayText' mt={3}>
            {props?.salesHeaderTitle}
          </Typography>
          <Typography variant='h6' color='GrayText' fontWeight={"bold"}>
            {props?.salesTotal}
          </Typography>
          <Grid xs={8} sm={12} display={'flex'} justifyContent={"flex-start"} alignItems={"flex-start"} alignContent={"flex-start"}>
            {props?.tinyLineChart}
          </Grid>
        </Grid>

        <Grid xs={6} >
          <Box sx={{ mt: 1 }}>
            <Typography variant='subtitle2' textAlign={'start'} >
              <Grid color={props?.headerTitleColor} backgroundColor={props?.headerTitleColorBackground} borderRadius={5} p={1}>
                {props?.headerTitle}
              </Grid>
            </Typography>
          </Box>

          <Box sx={{ mt: 6, display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
            <Typography variant='h6' fontWeight="bold" color="gray">
              {props?.total}

            </Typography>
            <Typography variant='subtitle2'
              sx={{
                ml: 1,
                display: 'flex',
                mt: 1,
                color: props.percentile && props.percentile.includes("-") ? palette.red[500] : "#5BFF94"
              }}>
              {props?.percentile}
            </Typography>
          </Box>

        </Grid>

        <Grid xs={6} item justifyContent={'center'}>
          <Box sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
            <Grid xs={9}>
              {props.image_src &&(
              <Images
                image={props?.image_src}
                width={props?.image_width}
                height={props?.image_height}
                alt={props?.image_alt}
              />
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  </Paper>

  )
}





export const TotalVisits = ({ ...props }) => {
  return (
    <>
      <Paper elevation={3} sx={{ width: '100%', height: '100%', borderRadius: 5 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} display={"flex"} alignContent={'center'} justifyContent={"center"} p={1} direction="row" useFlexGap flexWrap="wrap">
          <Grid container sx={{ m: 6 }} >
            <Grid xs={12} display='flex' flexDirection="row" alignItems={'center'}>
              <Grid xs={10} justifyContent='flex-start'>
                <Typography variant='subtitle2' color='GrayText' >
                  {props.headerName}
                </Typography>
              </Grid>
              <Grid justifyContent='flex-end'>
                <CardHeader colorTitle={props.percentile} titleIcon={props.percentileIcon} />
              </Grid>
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <Typography variant='h6' fontWeight="bold" color="gray">
                {props.total}
              </Typography>
            </Grid>
            {/* Paper container */}
            <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'row', backgroundColor: "transparent", width: '100%', mt: 1 }}>
              {/* Left side (Mobile) */}
              <Grid container xs={12} sm={6}  >
                {/* Your four text columns on the left side */}
                <Grid xs={12} justifyContent={'flex-start'} alignItems="flex-start" display={"flex"} >
                  <Typography variant="caption">
                    <Grid xs={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
                      <Box sx={{ borderRadius: 5, backgroundColor: '#f5e390', display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                        {props.leftIcon}
                      </Box>
                      <Box sx={{ ml: 1 }}>
                        <Typography variant='subtitle2'>{props.leftIconName}</Typography>
                      </Box>
                    </Grid>
                  </Typography>
                </Grid>

                <Grid xs={12} justifyContent={'left'} mt={1} >
                  <Grid  >
                    <Typography variant='h6' fontWeight="bold" color="gray">{props.leftIconPercentile}</Typography>
                  </Grid>
                  <Grid >
                    <Typography variant="caption" fontWeight={"bold"} color="#67676764">x{props.leftTotal}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Vertical Divider */}

              <Divider xs={{ display: 'none' }} sm={0} orientation="vertical" borderRadius={5} flexItem>
                <Box sx={{ borderRadius: 5, backgroundColor: '#CED6DC', display: 'flex', justifyContent: 'center', justifyItems: 'center', width: 30, height: 30, alignItems: 'center', }}>
                  <Typography color={"#73716A"} variant="caption">vs</Typography>
                </Box>
              </Divider>

              {/* Right side */}
              <Grid container xs={12} sm={6} justifyContent="right" alignItems="center" >
                {/* Your four text columns on the right side */}
                <Grid xs={12} justifyContent={'flex-end'} alignItems={"flex-end"} display={"flex"} >
                  <Typography variant="caption">
                    <Grid xs={4} sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                      <Typography variant='subtitle2' mr={1}> {props.rightIconName} </Typography>
                      <Box sx={{ borderRadius: 5, backgroundColor: '#b3b4e8', display: 'flex', justifyContent: 'center', justifyItems: 'center', }}>
                        {props.rightIcon}
                      </Box>
                    </Grid>
                  </Typography>
                </Grid>

                <Grid xs={12} display={"flex"} flexDirection={"column"} justifyContent={'right'} mt={1} alignItems={'flex-end'} >
                  <Grid  >
                    <Typography variant='h6' fontWeight="bold" color="gray">{props.rightIconPercentile}</Typography>
                  </Grid>
                  <Grid >
                    <Typography variant="caption" fontWeight={"bold"} color="#67676764">{props.rightTotal}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <LinearProgress color={'warning'} value={30} valueBuffer={70} variant='determinate' sx={{ height: 5, backgroundColor: '#7279fa', width: "100%", mt: 3 }} />
          </Grid>
        </Stack>
      </Paper>
    </>
  )
}





