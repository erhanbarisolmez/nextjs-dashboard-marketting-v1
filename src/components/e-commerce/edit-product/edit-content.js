'use client'
import Card from '@/components/e-commerce/Card'
import { variants } from '@/utils/variants'
import { Grid } from '@mui/material'
import TabsBasic from '../TabsBasic'
import { AverageDailySales } from './average-daily-sales'
import { ProductDetails } from './product-details'
import { ProductTemplate } from './product-template'
import { Status } from './status'
import { TabPanelContent } from './tabPanelContent'
import Thumbnail from './thumbnail'
const EditProductContent = ({statusOptions, productTemplateStatus}) => {
  
  const tabsVariant = variants.tabsBasic.plain;

  return (

    <Grid container  spacing={2} mt={2}>

      <Grid item xs={12} lg={3}>
        <Card >
          <Thumbnail />
        </Card>

        <Card mt={2} sx={{ height: 200 }}>
          <Status 
          statusOptions={statusOptions}          
          />
        </Card>

        <Card mt={2}>
          <ProductDetails  />
        </Card>

        <Card mt={2}>
          <AverageDailySales 
          />
        </Card>

        <Card mt={2}>
          <ProductTemplate 
            productTemplateStatus={productTemplateStatus}
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={9} >
        <TabsBasic 
          tab1="General"
          tab2="Advanced"
          tab3="Reviews"
          size="md"
          disableUnderline={true}
          variant={tabsVariant}
          tabPanel1={
            <TabPanelContent  productTemplateStatus ={productTemplateStatus}/>
          }
        />
    
      </Grid>
  
    </Grid>
  )
}

export default EditProductContent