import { palette } from '@/style/color';
import {
  ArrowDropDownOutlined as ArrowDownIcon,
  ArrowDropUpOutlined as ArrowUpIcon
} from "@mui/icons-material";
import MoreHorizIcon from '@mui/icons-material/MoreHorizOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Box, Paper, Typography } from "@mui/material";
import React from 'react';
import Images from '../Images';

const SalesCardWrapper = ({
  ...props
}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        minWidth: '100%',
        height: "300px",
        borderRadius: 5,
      },
      minWidth: '100%',
      justifyContent: 'center',
    }}>

      {/*  SALES OVERVIEW */}
      <Paper elevation={3}>
        <Box sx={{
          display: 'fixed',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: 'gray',
          ml: 3,
          mt: 6,
          maxWidth: '100vw'
        }}>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <Typography variant='h5' fontWeight={"bold"}>
              {props.salesOverviewHeaderName}
            </Typography>

          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            mr: 3
          }}>
            <MoreIcon />
          </Box>
        </Box>
        {/* SALES OVERVİEW CARD HEADER*/}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: 3,
          color: 'gray'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <CardHeader
              headerTitle={props.salesOverviewHeaderTitle}
              colorTitle={props.salesOverviewHeaderTitleColor}
              titleIcon={props.salesOverviewHeaderTitleColorIcon}
            />

          </Box>

        </Box>
        {/* SALES OVERVIEW CONTENT */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'gray',
          m: 3,
          mt: 7,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
            <SalesOverviewContent
              number={props.salesOverviewNewCustomersNumber}
              text={props.salesOverviewNewCustomersText}
              icon={props.salesOverviewNewCustomersIcon}
              backgroundColorIcon={props.salesOverviewNewCustomersIconColorBackground}
              colorIcon={props.salesOverviewNewCustomersIconColor}
            />
            <SalesOverviewContent
              number={props.salesOverviewTotalProfitNumber}
              text={props.salesOverviewTotalProfitText}
              icon={props.salesOverviewTotalProfitIcon}
              backgroundColorIcon={props.salesOverviewTotalProfitIconColorBackground}
              colorIcon={props.salesOverviewTotalProfitIconColor}
            />
            <SalesOverviewContent
              number={props.salesOverviewNewTransactionsNumber}
              text={props.salesOverviewNewTransactionsText}
              icon={props.salesOverviewNewTransactionsIcon}
              backgroundColorIcon={props.salesOverviewNewTransactionsIconColorBackground}
              colorIcon={props.salesOverviewNewTransactionsIconColor}
            />
          </Box>
        </Box>
      </Paper>

      {/* WEEKLY SALES */}
      <Paper elevation={3} sx={{ backgroundColor: '#6C63FA' }} >
        <Box sx={{
          display: 'fixed',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: 'gray',
          ml: 3,
          mt: 6,
          maxWidth: '100vw',
          color: 'white'
        }}>
          <Box>
            <Typography variant='h5' fontWeight={"bold"}>
              {props.weeklySalesHeaderName}
            </Typography>


          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mr: 3
          }}>
            <MoreHorizIcon />

          </Box>
        </Box>
        {/* WEEKLY SALES CARD HEADER */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          ml: 3,
          color: 'white'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>

            <CardHeader
              headerTitle={props.weeklySalesHeaderName}
              colorTitle={props.weeklySalesHeaderTitleColor}
              titleIcon={props.weeklySalesHeader}
            />
          </Box>
        </Box>


        {/* WEEKLY SALES CONTENT */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: {
              xs: '50%',
              sm: '40%',
              md: '40%',
              lg: '40%'
            },
            mt: 3,
            ml: 3,
            color: 'white',
            justifyContent: 'left'
          }}>

            <WeeklySalesContent
              weeklySalesHeader={props.weeklySalesContentHeader}
              numberOne={props.weeklySalesContentNumberMobiles}
              textOne={props.weeklySalesContentTextMobiles}
              numberTwo={props.weeklySalesContentNumberAccessories}
              textTwo={props.weeklySalesContentTextAccessories}
            />
            <WeeklySalesContent
              numberOne={props.weeklySalesContentNumberTablets}
              textOne={props.weeklySalesContentTextTablets}
              numberTwo={props.weeklySalesContentNumberComputers}
              textTwo={props.weeklySalesContentTextComputer}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mr: 1,
            justifyContent: 'right'

          }}>

            <Images 
            image="/hero-mobile2.png"
            width={200}
            height={200}
            alt="Screenshots of the dashboard project showing desktop and mobile versions" 
            />
          </Box>
        </Box>
        <Box>
        </Box>
      </Paper>

    </Box>

  )
}

export default SalesCardWrapper


export const SalesOverviewContent = ({ number, text, icon, backgroundColorIcon, colorIcon }) => {
  return (

    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
      {icon && React.cloneElement(icon, {
        sx: {
          ...icon.props.sx,
          backgroundColor: backgroundColorIcon,
          fontSize: {
            xs: '1rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '2.5rem',
          },
          borderRadius: 3,
          color: colorIcon,
          p: 1

        }
      })}
      <Typography variant='subtitle2' justifyContent='space-between' sx={{ p: 1 }} >
        <b>{number}</b><br />
        {text}
      </Typography>
    </Box>

  )
}


export const WeeklySalesContent = ({  weeklySalesHeader, numberOne, textOne, numberTwo, textTwo, flexDirection, boxBackgroundColor }) => {
  const defaultBackgroundColor = '#544CD0';
  
  return (
    <>
      <Typography
        variant='subtitle1'
        fontWeight={600}
        fontFamily={'serif'}
      >
        {weeklySalesHeader}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Box sx={{
          backgroundColor: boxBackgroundColor ? boxBackgroundColor : defaultBackgroundColor,
          display: 'flex',
          width: 16,
          borderRadius: 2,
          alignItems: 'center',
          height: 10,
          p: 1,
          mt: 2,
        }}>
          <Typography variant='subtitle2'>
            {numberOne}
          </Typography>
          <Typography
            variant='subtitle1'
            fontWeight={500}
            fontFamily={'serif'}
            sx={{
              ml:3
            }}
         
          >
            {textOne}
          </Typography>

        </Box>

        <Box sx={{
          backgroundColor: boxBackgroundColor ? boxBackgroundColor : defaultBackgroundColor,
          display: 'flex',
          width: 16,
          borderRadius: 2,
          alignItems: 'center',
          height: 10,
          p: 1,
          mt: 2,
        }}>
          <Typography variant='subtitle2'>
            {numberTwo}
          </Typography>
          <Typography
            variant='subtitle1'
            fontWeight={500}
            fontFamily={'serif'}
            sx={{ ml: 3 }}
          >
            {textTwo}
          </Typography>
        </Box>

      </Box>
    </>
  )
}



export const CardHeader = ({
  headerName,
  headerTitle,
  colorTitle,
  icon,
  headerTitleFontWeight,
  headerTitleVariant = 'subtitle2',
  headerTitleFontColor,
  colorTitleVariant = 'subtitle2' ,
}) => {
  const arrowIcon = colorTitle && colorTitle.includes('-') ? <ArrowDownIcon /> : <ArrowUpIcon />;
  const arrowColor = colorTitle && colorTitle.includes("-") ? palette.red[500] : "#5BFF94";
  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        {headerName}
      </Typography>
    
      {icon && React.cloneElement(icon, {
        sx: {
          ...icon.props.sx,
          mr: 3
        }
      })}

      <Typography
        variant={headerTitleVariant}
        fontWeight={headerTitleFontWeight}
        color={headerTitleFontColor}
      >
        {headerTitle}
      </Typography>

      { colorTitle &&  (
      <Typography variant={colorTitleVariant} color={arrowColor} sx={{ ml: 1, display: 'flex' }}>
        {colorTitle}
        {arrowIcon && React.cloneElement(arrowIcon, {
          sx: {
            ...arrowIcon.props.sx,
            fontSize: 15,
          }
        })}

      </Typography>)}
    </>
  )
}

