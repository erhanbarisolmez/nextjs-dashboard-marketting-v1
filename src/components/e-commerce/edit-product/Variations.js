'use client'
import CustomButton from '@/components/CustomButton'
import Card from '@/components/e-commerce/Card'
import { palette } from "@/style/color"
import { variants } from '@/utils/variants'
import { Add } from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
import { useReducer, useState } from 'react'
import { TabHeader } from '../TabHeader'
import { VariationComponent } from './variationComponent'

export const Variations = ({ variationsStatus }) => {
  const [select, setSelect] = useState();
  const variantButton = variants.button.text;
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addVariation":
        return {
          ...state,
          variations: [...state.variations, action.variation],
        }
      case "removeVariation":
        return {
          ...state,
          variations: state.variations.filter((v) => v.id !== action.id),
        };
      default:
        return state;
    }
  }, {
    variations: [],
  });

  const addVariation = () => {
    nextId++;
    dispatch({ type: "addVariation", variation: { id: nextId, ...initialVariation } });

  }

  const removeVariation = (id) => {
    dispatch({ type: "removeVariation", id });
  };


  const handleStatus = () => {
    setSelect(!select);
  }
  return (
    <>
      <Card>
        <Container>
          <Grid item xs={12} sx={{ mt: 6, mb: 6 }}>
            <TabHeader
              headerTextField="Variations"
            />
            <TabHeader
              level="body-sm"
              titleTextField="Add Product Variations"
              sx={{ mt: 3 }}
            />
            {state.variations.map((variation) => (
              <VariationComponent
                key={variation.id}
                variation={variation}
                onClose={removeVariation}
                handleStatus={handleStatus}
                variationsStatus={variationsStatus}
              />
            ))}
            <CustomButton
              variant={variantButton}
              buttonText="Create new category"
              startIcon={<Add />}
              onClick={addVariation}
              sx={{
                bgcolor: palette.lightBlue[50],
                color: palette.lightBlue[500],
                ":hover": {
                  backgroundColor: palette.lightBlue[600] + '!important',
                  color: "white"
                },
                mt: 1
              }}
            />
          </Grid>
        </Container>
      </Card>
    </>
  )
}
let nextId = 0;
const initialVariation = {};