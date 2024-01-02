import { palette } from '@/style/color';
import MovingIcon from '@mui/icons-material/Moving';
import { Box, Button, Grid, Typography } from '@mui/material';
import { CardHeader, WeeklySalesContent } from './sales-cards';
const SliderPage = (props) => {
  const {
    leftTextOne,
    leftTextTwo,
    leftNumberOne,
    leftTextNumberTwo,
    rightHeader,
    rightHeaderTitle,
    rightColorTitle,
    rightTitleIcon,
    rightIconHeader,
    rightTextOne,
    rightTextTwo,
    button1,
    button2,
    rightNumberOne,
    rightNumberTwo
  } = props;
  const defaultBgColor = "transparent"
  const activeBackgroundColor = leftTextOne && leftTextTwo ? palette.grey[300] : defaultBgColor;
  return (
    <>
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        {/* Left Content */}
        <Grid item xs={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',

        }}>

          <WeeklySalesContent
            flexDirection={"column"}
            numberOne={leftNumberOne}
            textOne={leftTextOne}
            numberTwo={leftTextNumberTwo}
            textTwo={leftTextTwo}
            boxBackgroundColor={
              activeBackgroundColor || defaultBgColor
            }
          />

        </Grid>
        {/* Left Content END */}

        {/* Right Content */}
        <Grid item xs={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',

        }}>
          <Typography variant='h5' fontWeight={"bold"}>
            {rightHeader}
          </Typography>
          {/* HEADER */}

          {rightTitleIcon &&(
          <CardHeader
            headerTitle={rightHeaderTitle}
            colorTitle={rightColorTitle}
            titleIcon={rightTitleIcon}
          />
          )}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            mt: 2
          }}>
            <Grid item xs={6}
              sx={{
                display: 'flex',
                flexDirection: "row",
                width: '100%',
                height: '100%',
                backgroundColor: palette.lightBlue[100],

              }}
            >
              <MovingIcon sx={{
                color: 'turquoise',
                width: '100%',
                height: '100%'
              }} />
            </Grid>

            <Grid item xs={8} sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%'
            }}>
              <Grid item xs={12} sx={{ ml: 2 }} >
                <Grid item xs={6}>
                  <Typography variant='subtitle2' fontWeight="bold" >
                    {rightIconHeader}
                  </Typography>

                </Grid>
                <Grid item xs={6} sx={{
                  display: 'flex',
                  justifyContent: 'start'

                }}>
                  {rightNumberOne && rightNumberTwo && (
                    <WeeklySalesContent
                      flexDirection={"column"}
                      boxBackgroundColor={palette.grey[300]}
                      numberOne={rightNumberOne}
                      numberTwo={rightNumberTwo}
                      textOne={rightTextOne}
                      textTwo={rightTextTwo}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12} spacing={2} sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 2
          }}>
            {button1 && (
              <Button variant="outlined" sx={{
                color: palette.deepPurple[400],
                borderColor: palette.deepPurple[400],
              }}>{button1}</Button>
            )}
            {button2 && (
              <Button variant="contained" sx={{
                ml: 2,
                backgroundColor: palette.deepPurple[600],
                ":hover": {
                  backgroundColor: palette.deepPurple[600]
                }
              }}>{button2}</Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      
    </>
  )
}

export default SliderPage