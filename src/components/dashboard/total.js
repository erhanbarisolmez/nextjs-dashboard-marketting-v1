import { palette } from '@/style/color';
import BusinessIcon from '@mui/icons-material/BusinessCenterOutlined';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Box, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CardHeader } from './sales-cards';

const Total = ({
  selectedIcon = "laptop",
  iconColor, progressIconColor,
  progressValue,
  progressSize,
  headerTitle,
  colorTitle,
  totalTitle
}) => {
  const icons = {
    laptop: <LaptopIcon key="laptop" style={{ color: iconColor }} />,
    bag: <BusinessIcon key="bag" style={{ color: iconColor }} />
  };
  const iconToRender = icons[selectedIcon] || icons.laptop;
  return (
    <Grid container
      xs={12}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        minHeight: 150,
        alignContent: 'center',

      }}>
      <Grid item
        xs={6}
        justifyContent={'center'}
        width={'100%'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <CircularProgress
          variant="determinate"
          value={progressValue || 75}
          size={progressSize || 80}
          thickness={4}
          sx={{
            color: progressIconColor
          }}
        />

        <Box sx={{
          position: 'absolute',
          fontSize: 25,
          color: 'black',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          color: palette.deepPurple[500]
        }}>

          {iconToRender}

        </Box>

      </Grid>

      <Grid item xs={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'start'
        }}
      >
        <Grid item xs={12} display={'flex'} flexDirection={'row'} alignItems={'end'}>
          <CardHeader
            headerTitle={headerTitle}
            colorTitle={colorTitle}
            headerTitleFontWeight={"600"}
            headerTitleVariant='h6'
            headerTitleFontColor={"gray"}
            colorTitleVariant='subtitle1'
          />
        </Grid>

        <Grid item
          display={'flex'}
          flexDirection={'column'}
          xs={12}
        >
          <Typography variant='subtitle2' color="gray">
            {totalTitle}
          </Typography>

        </Grid>

      </Grid>

    </Grid>
  );
};


export default Total