'use client'
import TextFieldCustom from "@/components/TextFieldCustom"
import Card from "@/components/e-commerce/Card"
import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import InputFileUpload from "../InputFileUpload"
import { TabHeader } from "../TabHeader"
import ExampleTextareaComment from "../TextArea"
import { TooltipCustom } from "../Tooltip"
export const TabPanelContent = () => {
  const [price, setPrice] = useState("199.99");
  const [productName, setProductName] = useState("Sample Product");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [price, productName]);

  const validateForm = () => {
    let errors = {}

    if (!productName) {
      errors.productName = "Product name is required"
    }

    if (!price) {
      errors.price = "Product base price is required"
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }
  return (
    <>
      <Card>
        <Container >

          {/* GENERAL */}
          <TabHeader
            text="General"
            sx={{ mt: 6, }}
          />

          <TabHeader
            level="title-md"
            colorText=" *"
            sx={{ mt: 3 }}

            headerTextFieldLevel="body-sm"
            headerTextField="Product Name"
            headerTextFieldFontWeight="100"
            sxHeaderTextField={{ fontWeight: 600 }}

          />
          <TextFieldCustom
            label="Sample product"
            onChange={(event) => setProductName(event.target.value)}
          />

          <TabHeader
            level="body-xs"
            titleTextField="A product name is required and recommended to be unique."
            sxTitleTextField={{ opacity: 0.6 }}
          />
          {errors.productName &&
            <TabHeader level="body-xs" colorText={errors.productName} />
          }

          <TabHeader
            headerTextFieldLevel="body-sm"
            headerTextField="Description"
            headerTextFieldFontWeight="100"
            sxHeaderTextField={{ fontWeight: 600 }}
            sx={{ mt: 6 }}
          />

          <ExampleTextareaComment />

          <TabHeader
            level="body-xs"
            titleTextField="Set a description to the product for better visibility."
            sxTitleTextField={{ opacity: 0.6, }}
          />
          <TabHeader sx={{ mt: 6 }} />


        </Container>
      </Card>

      <TabHeader sx={{ mt: 6 }} />


      {/* MEDIA  */}
      <Card maxHeight={100} >
        <Container>
          <TabHeader
            text="Media"
            sx={{ mt: 6 }}
          />
          <InputFileUpload sx={{
            mt: 3,

          }} />
          <TabHeader
            level="body-xs"
            titleTextField="Set the product media gallery."
            sxTitleTextField={{ opacity: 0.6 }}
          />
        </Container>
      </Card>

      <TabHeader sx={{ mt: 18 }} />


      {/* PRICING  */}
      <Card maxHeight={100} >
        <Container>
          <TabHeader
            text="Pricing"
            sx={{ mt: 6 }}
          />

          <TabHeader
            level="title-md"
            colorText=" *"
            sx={{ mt: 3 }}

            headerTextFieldLevel="body-sm"
            headerTextField="Base Price"
            headerTextFieldFontWeight="100"
            sxHeaderTextField={{ fontWeight: 600 }}

          />
          <TextFieldCustom
            placeholder="Product Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
           <TabHeader
            level="body-xs"
            titleTextField="Set the product price."
            sxTitleTextField={{ opacity: 0.6 }}
          />
          {errors.price &&
            <TabHeader level="body-xs" colorText={errors.price} />
          }
          
          <Grid item xs={12} display={'flex'} flexDirection={"row"} mt={6}>
          <TabHeader 
             headerTextFieldLevel="body-sm"
             headerTextField="Discount Type "
             headerTextFieldFontWeight="100"
             sxHeaderTextField={{ fontWeight: 600 }}
          />
          <TooltipCustom 
            title="Select a discount type that will be applied to this product"
          
          />
          </Grid>
         

        </Container>
      </Card>
    </>
  )
}


