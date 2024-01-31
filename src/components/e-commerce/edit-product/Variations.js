'use client'
import AutoCompleteCustom from '@/components/AutoCompleteCustom'
import CustomButton from '@/components/CustomButton'
import TextFieldCustom from '@/components/TextFieldCustom'
import Card from '@/components/e-commerce/Card'
import { palette } from "@/style/color"
import { variants } from '@/utils/variants'
import { Add } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import { TabHeader } from '../TabHeader'

export const Variations = ({variationsStatus}) => {
  const  [select, setSelect] = useState([]);
  const [show,  setShow] = useState(false);
  const [add, setAdd] = useState();
  const variantButton = variants.button.text;

  const handleOnclick = () => {
    setShow(true);
  }
  const close = () => {
    setShow(false);
  }
  const handleStatus = () => {
    setSelect(!select);
  } 
   return (
    <>
      <Card>
        <Container>
        <Grid item xs={12} sx={{mt:6, mb:6}}>
        <TabHeader 
             headerTextField="Variations"
          /> 
        <TabHeader 
          level="body-sm"
          titleTextField="Add Product Variations"
           sx={{mt:3}}
        />
        {show && (
        <Grid container item xs={12}>
        <Grid item xs={3}>
            <AutoCompleteCustom
              label = "Select a variation"
              options = {variationsStatus}
              onChange = {handleStatus}
            />
        </Grid>
        <Grid container item xs={4} ml={1}  sx={{ display:'flex', justifyContent:'space-around', flexDirection:'row'}}>
          <Grid item >
          <TextFieldCustom  
            placeholder = "Variation"/>
            </Grid>
          <Grid item sx={{ display:'flex', alignItems:'center'}} >
          <CloseIcon  onClick = {close}/>
          </Grid>
        </Grid>
        </Grid>
        )}
        <CustomButton 
          variant = {variantButton}
          buttonText = "Create new category"
          startIcon = {<Add />}
          onClick= {handleOnclick}
          sx={{
            bgcolor: palette.lightBlue[50] ,
            color:palette.lightBlue[500],
            ":hover" :{
              backgroundColor: palette.lightBlue[600] + '!important',
              color: "white",
             
            },
            mt:1
          }}
          />
        </Grid>
        </Container>
      </Card>
    </>
  )
}
