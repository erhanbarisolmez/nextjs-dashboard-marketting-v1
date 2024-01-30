import TextFieldCustom from '@/components/TextFieldCustom'
import Card from '@/components/e-commerce/Card'
import { Container, Grid } from '@mui/material'
import CheckBoxJoy from '../CheckBoxJoy'
import { TabHeader } from '../TabHeader'
export const AdvancedTabContent = () => {
  return (
    <>
      <Grid container gap={4} flexDirection={'column'}>
        <Card  >
          <Container>
            <TabHeader
              text="Inventory"
              sx={{ mt: 6 }}
            />
            {/* SKU */}
            <TabHeader
              level="body-sm"
              text="SKU"
              colorText=" *"
              sx={{ mt: 3 }}
            />

            <TextFieldCustom
              placeholder="SKU Number"
            />
            <TabHeader
              level="body-xs"
              titleTextField="Enter the product SKU."
              sxTitleTextField={{ opacity: 0.6 }}
            />
            {/* BARCODE */}
            <TabHeader
              level="body-sm"
              text="Barcode"
              colorText=" *"
              sx={{ mt: 3 }}
            />
            <TextFieldCustom
              placeholder="Barcode Number"
            />
            <TabHeader
              level="body-xs"
              titleTextField="Enter the product barcode number."
              sxTitleTextField={{ opacity: 0.6 }}
            />
            {/* QUANTITY */}
            <TabHeader
              level="body-sm"
              text="Quantity"
              colorText=" *"
              sx={{ mt: 3 }}
            />
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Grid item xs={6} sx={{ mr: 1 }}>
                <TextFieldCustom placeholder="On shelf" />
              </Grid>
              <Grid item xs={6} sx={{ ml: 1 }}>
                <TextFieldCustom placeholder="In warehouse" />
              </Grid>
            </Grid>
            <TabHeader
              level="body-xs"
              titleTextField="Enter the product quantity."
              sxTitleTextField={{ opacity: 0.6 }}
            />
            {/* ALLOW BACKORDERS */}
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Grid item xs={6}>
                <TabHeader
                  level="body-sm"
                  text="Allow Backorders"
                />
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid><CheckBoxJoy  /></Grid>
              </Grid>
              <Grid item xs={6}>
                <TabHeader 
                level="body-xs" 
                titleTextField="Allow customers to purchase products that are out of stock." 
                sxTitleTextField={{ opacity: 0.6 }}
                />
                </Grid>
            </Grid>
          </Container>
        </Card>
      </Grid>
    </>
  )
}
