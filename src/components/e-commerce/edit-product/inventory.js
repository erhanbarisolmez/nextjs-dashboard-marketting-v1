import TextFieldCustom from '@/components/TextFieldCustom'
import Card from '@/components/e-commerce/Card'
import CheckBoxJoy from '@/components/e-commerce/CheckBoxJoy'
import { TabHeader } from '@/components/e-commerce/TabHeader'
import { Container, Grid } from '@mui/material'
import { TextFieldCard } from '../TextFieldCard'

export const Inventory = () => {
  return (
    <>
      <Card >
        <Container>
          <TabHeader
            text="Inventory"
            sx={{ mt: 6 }}
          />
          {/* SKU - INVENTORY */}
         <TextFieldCard />
          {/* BARCODE - INVENTORY*/}
          <TextFieldCard 
            textHeader="Barcode"
            textFieldPlaceHolder="Barcode Number"
            textBottom="Enter the product barcode number."
          />
      
          {/* QUANTITY - INVENTORY */}
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
          {/* ALLOW BACKORDERS - INVENTORY */}
          <Grid item xs={12} sx={{ mt: 3, mb: 6 }}>
            <Grid item xs={6}>
              <TabHeader
                level="body-sm"
                text="Allow Backorders"
              />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }}>
              <Grid item xs={12}>
                <CheckBoxJoy
                  defaultChecked={false}
                  label="Yes"
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <TabHeader
                level="body-xs"
                titleTextField="Allow customers to purchase products that are out of stock."
                sxTitleTextField={{ opacity: 0.5 }}
              />
            </Grid>
          </Grid>
        </Container>

      </Card>
    </>
  )
}
