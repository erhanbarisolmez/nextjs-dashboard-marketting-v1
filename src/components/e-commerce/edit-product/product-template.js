'use client'
import AutoCompleteCustom from '@/components/AutoCompleteCustom'
import { TypographyCustom } from '@/components/TypographyCustom'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import { TabHeader } from '../TabHeader'
export const ProductTemplate = ({productTemplateStatus}) => {
  const [templateStatus, setTemplateStatus] = useState();

  const selectionStatus = (templateStatus) => {
    //  const isSelected = templateStatus ? '✔' : ''; 
    setTemplateStatus(!templateStatus);
  }
  return (
    <Grid container gap={2} mt={6}  mb={6}>
      <Container>
        <Grid item xs={12} >
        <TypographyCustom variant = "h6" text = "Product Template"  fontWeight = "bold"/>

          <TabHeader
            level="title-sm"
            titleTextField="Select a product template"
            sx={{mt:3}}
          />
          <AutoCompleteCustom 
            options = {productTemplateStatus}
            value = {templateStatus}
            onChange={selectionStatus}
          />
          <TabHeader 
            level="body-xs"
            text = "Assign a template from your current theme to define how a single product is displayed."
            sx={{opacity:0.6, fontWeight:500, mt:1}}
          />
        </Grid>
      </Container>
    </Grid>
  )
}
