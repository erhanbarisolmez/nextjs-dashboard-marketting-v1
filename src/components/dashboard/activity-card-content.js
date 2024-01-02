import { palette } from '@/style/color';
import CircleIcon from '@mui/icons-material/Circle';
import FaceIcon from '@mui/icons-material/FaceOutlined';
import { Box, Divider, Grid } from "@mui/material";
import { TypographyCustom } from '../TypographyCustom';
export const ActivityCardContent = (props) => {
  const { 
    headerTextOne,
    titleTextOne,
    pdf,
    headerTextTwo,
    titleTextTwo,
    titleTextTwoIcon,
    headerTextThree,
    titleTextThree,
    dateOne,
    dateTwo,
    dateThree
  }  = props;
  return (
    <Box sx={{
      display: 'flex',
      height: '90%',
      mb: 6,
      color: 'gray',
      mt: 8
    }}>
      <Grid item
        xs={1}
        display="flex"
        flexDirection="column"
        alignItems='center'
        justifyContent='space-between'
        height={'90%'}
      >

        <CircleIcon sx={{ display: 'flex', color: palette.red[400], boxShadow: '0px 0px 20px rgb(229, 115, 115)', borderRadius: '100%', backgroundColor: palette.red[400] }} />

        <Divider orientation="vertical" flexItem sx={{
          display: 'flex',
          height: {
            xs: "80%",
            md: "75%",
          },
          alignItems: 'center',
        }} >
          <CircleIcon sx={{ display: 'flex', color: palette.deepPurple[400], boxShadow: '0px 0px 20px rgb(149, 117, 205)', borderRadius: '100%', backgroundColor: palette.deepPurple[400] }} />
        </Divider>


        <CircleIcon sx={{ display: 'flex', color: palette.lightBlue[400], boxShadow: '0px 0px 20px rgb(79, 195, 247)', borderRadius: '100%', backgroundColor: palette.lightBlue[400] }} />
      </Grid>

      <Grid container xs={10}  >
        <Grid xs={10} sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'flex-start',
        }}>

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: '90%',

          }}>

            <TypographyCustom
              variant='subtitle1'
              text={headerTextOne}
              sx={{
                fontWeight: "bold"
              }}
            />

            <TypographyCustom
              variant='subtitle1'
              text={titleTextOne}
            />

            <TypographyCustom
              variant='subtitle1'
              text={pdf}
            />
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '90%',
          }}>

            <TypographyCustom
              variant='subtitle1'
              text={headerTextTwo}
              sx={{
                display: 'flex',
                fontWeight: 'bold',
              }}
            />

            <TypographyCustom
              variant='subtitle1'
              text={titleTextTwo}
            />

            <TypographyCustom
              variant='subtitle2'
              text={titleTextTwoIcon}
              icon={<FaceIcon />}
              sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                fontWeight: 600
              }}
            />
          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            height: '90%',
          }}>

            <TypographyCustom
              variant='subtitle1'
              text={headerTextThree}
              sx={{
                fontWeight: 'bold',
              }}
            />

            <TypographyCustom
              variant='subtitle1'
              text={titleTextThree}
            />
          </Box>

        </Grid>
        <Grid container display={'flex'} alignItems={'flex-start'} justifyContent={"left"} xs={2}  >
          <Box sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            height: '90%',
            alignItems: 'center'
          }}>
            <TypographyCustom
              variant='subtitle1'
              text={dateOne}
            />

            <TypographyCustom
              variant='subtitle1'
              text={dateTwo}
            />

            <TypographyCustom
              variant='subtitle1'
              text={dateThree}
            />

          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}
