'use client'
import { palette } from '@/style/color';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid, IconButton } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SliderPage from './dashboard/slider-page';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    display: 'flex',
    padding: 15,
    minHeight: '30vh',
    color: '#fff',
    maxWidth: '100%',
    color: 'gray',
  },
  slide1: {
    backgroundColor: 'transparent',
  },
  slide2: {
    backgroundColor: 'transparent',
  },
  slide3: {
    backgroundColor: 'transparent',
  },
  pagination: {
    display: 'flex',
  },
};

const DemoAutoPlay = (props) => {
  
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
    rightNumberTwo,
    leftTextOne2
  } = props;
  
  
  
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const handlePaginationClick = (newIndex) => {
    setIndex(newIndex);
  };

  const renderPagination = () => {
    return (
      <div style={styles.pagination}>
        {[0, 1, 2].map((i) => (
          <IconButton
            key={i}
            onClick={() => handlePaginationClick(i)}
            sx={{
              color: index === i ? palette.deepPurple[400] : palette.grey[400],
            }}
          >
            <FiberManualRecordIcon />
          </IconButton>
        ))}
      </div>
    );
  };

  return (
    
    <>
      <Grid item xs={12} sx={{ display: 'flex', width: '100%', p: 3 }}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {renderPagination()}
          </Grid>

          <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              {index === 0 && rightTitleIcon &&(
              <SliderPage 
              leftTextOne={leftTextOne} 
              leftTextTwo={leftTextTwo}
              leftNumberOne={leftNumberOne}
              leftTextNumberTwo = {leftTextNumberTwo}
              rightHeader = {rightHeader}
              rightHeaderTitle = {rightHeaderTitle}
              rightColorTitle = {rightColorTitle}
              rightTitleIcon = {rightTitleIcon}
              rightIconHeader = {rightIconHeader}
              rightTextOne = {rightTextOne}
              rightTextTwo = {rightTextTwo}
              rightNumberOne = {rightNumberOne}
              rightNumberTwo = {rightNumberTwo}
              button1 = {button1}
              button2 = {button2}
              />
              )}
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              {index === 0 && rightTitleIcon &&(
              <SliderPage 
              leftTextOne={leftTextOne2}
              />
              )}
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              {index === 0 && rightTitleIcon &&(
              <SliderPage />
              )}
            </div>
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>
    </>
  );
};

export default DemoAutoPlay;
