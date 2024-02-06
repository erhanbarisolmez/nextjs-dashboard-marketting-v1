'use client'
import Card from '@/components/e-commerce/Card'
import { variants } from '@/utils/variants'
import { Grid } from '@mui/material'
import TabsBasic from '../TabsBasic'
import { AdvancedTabContent } from './advancedTabContent'
import { AverageDailySales } from './average-daily-sales'
import { GeneralTabContent } from "./generalTabContent"
import { ProductDetails } from './product-details'
import { ProductTemplate } from './product-template'
import { ReviewsTabContent } from './reviewsTabContent'
import { Status } from './status'
import Thumbnail from './thumbnail'
const EditProductContent = ({ statusOptions, productTemplateStatus, taxStatus, variationsStatus }) => {

  const tabsVariant = variants.tabsBasic.plain;

  return (

    <Grid container spacing={2} mt={2}>
      {/* LEFT CONTENT */}
      <Grid item xs={12} lg={3}>
        {/*THUMBNAIL  */}
        <Card >
          <Thumbnail
          />
        </Card>
        {/*STATUS  */}
        <Card mt={2} sx={{ height: 200 }}>
          <Status
            statusOptions={statusOptions}
          />
        </Card>
        {/*PRODUCT DETAILS  */}
        <Card mt={2}>
          <ProductDetails
          />
        </Card>
        {/*AVERAGE DAILY SALES  */}
        <Card mt={2}>
          <AverageDailySales
          />
        </Card>
        {/*PRODUCT TEMPLATE  */}
        <Card mt={2}>
          <ProductTemplate
            productTemplateStatus={productTemplateStatus}
          />
        </Card>
      </Grid>

      {/* RIGHT CONTENT - TAB PANEL   */}
      <Grid item xs={12} sm={12} md={9} >
        <TabsBasic
          tab1="General"
          tab2="Advanced"
          tab3="Reviews"
          size="md"
          disableUnderline={true}
          variant={tabsVariant}
          tabPanel1={
            <GeneralTabContent
              productTemplateStatus={productTemplateStatus}
              taxStatus={taxStatus}
            />}
          tabPanel2={
            <AdvancedTabContent 
            variationsStatus = {variationsStatus}
            />}
          tabPanel3={
            <ReviewsTabContent
             />}
        />
      </Grid>

    </Grid>
  )
}

export default EditProductContent