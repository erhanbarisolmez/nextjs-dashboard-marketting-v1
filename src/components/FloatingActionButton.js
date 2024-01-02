'use client'
import { palette } from '@/style/color';
import {
  PersonalVideoOutlined as DesktopIcon,
  StayCurrentPortraitOutlined as MobileIcon,
  AddOutlined as PlusIcon
} from '@mui/icons-material';
import ApiIcon from '@mui/icons-material/ApiOutlined';
import { Box, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );

}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}



export default function FloatingActionButtonZoom({referralSourceTableOne, referralSourceTableTwo, referralSourceTableThree} ) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    setIndex(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };


  const isSelected = value === index;

  return (
    <>
    <Grid xs={12}
      display={'flex'}
      flexDirection={'column'}
    >
    <Box
      sx={{
        width: '100%',
        display:'flex',
        position: 'static',
      }}
    >
      <Grid xs={12} sx={{
        display:'flex',
        justifyContent:'flex-start',
      

        }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="false"
        textColor="inherit"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        
        <Tab  
        icon={
        
        <MobileIcon sx={{
          border: 3,
          p:5,
          borderColor: 'gray',
          borderStyle: isSelected && value == 0 ? 'solid' : 'dashed',
          borderRadius:'10px',
          borderColor: isSelected && value == 0 ? palette.deepPurple[400] : "gray",
          color: isSelected && value == 0 ? '#464884' :  'gray',
        }} />}

         {...a11yProps(0)}
         />
        <Tab 
        icon={<DesktopIcon sx={{
          border: 3,
          p:5,
          borderColor: 'gray',
          borderStyle: isSelected && value == 1 ? 'solid' : 'dashed',
          borderRadius:'10px',
          borderColor: isSelected && value == 1 ? palette.deepPurple[400] : "gray",
          color: isSelected && value == 1 ? '#464884' :  'gray',
         
        }} />}
        {...a11yProps(1)} 
        />
        <Tab 
         icon={<ApiIcon sx={{
          border: 3,
          p:5,
          borderColor: 'gray',
          borderStyle: isSelected && value == 2 ? 'solid' : 'dashed',
          borderRadius:'10px',
          borderColor: isSelected && value == 2 ? palette.deepPurple[400] : "gray",
          color: isSelected && value == 2 ? '#464884' :  'gray',
         
        }} />}
        {...a11yProps(2)} />
        <Tab 
        icon={<PlusIcon sx={{
          border: 3,
          p:5,
          borderColor: 'gray',
          borderStyle: isSelected && value == 3 ? 'solid' : 'dashed',
          borderRadius:'10px',
          borderColor: isSelected && value == 3 ? palette.deepPurple[400] : "gray",
          color: isSelected && value == 3 ? '#464884' :  'gray',
         
        }} />}
         {...a11yProps(3)} />

      </Tabs>
      </Grid>
      
    </Box>
    <Grid item xs={12}>
      <SwipeableViews
        position="static"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          {referralSourceTableOne}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
          {referralSourceTableTwo}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
          {referralSourceTableThree}
        </TabPanel>
      </SwipeableViews>
      </Grid>
    </Grid>

    </>
  );
}