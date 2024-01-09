'use client'
import { palette } from "@/style/color";
import { variants } from "@/utils/variants";
import FilterIcon from '@mui/icons-material/FilterAlt';
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "./CustomButton";
import FilterCard from "./e-commerce/FilterCard";


const PageHeader = ({ headerText, statusOptions }) => {
  const [isFilterCardOpen, setIsFilterCardOpen] = useState(false);
  const [ status, setStatus]  = useState("");
  const contained = variants.button.contained;
  
  const onClickFilteredButton = () => {
    setIsFilterCardOpen(!isFilterCardOpen);
  }
  return (
    <>
      <Grid container>
        <Grid item xs={6} textAlign={"start"}>
          <Typography variant="h6" fontWeight="bold" >
            {headerText}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
          <CustomButton
            variant={contained}
            onClick={onClickFilteredButton}
            buttonText="Filter"
            startIcon={<FilterIcon sx={{ color: palette.grey[300], fontSize: "12px" }} />}
            sx={{
              bgcolor: palette.grey[500],
              ':hover': {
                bgcolor: palette.grey[700]
              }
            }}
          />
          {isFilterCardOpen && (
            <FilterCard 
              statusOptions = {statusOptions}
              value = {status}
              onChange = {(e,newValue)=> setStatus(newValue)}
            />
          )}
          <CustomButton variant={contained} onClick={onClickFilteredButton} buttonText="Create"
            sx={{
              ml: 1,
              bgcolor: palette.lightBlue[500],
              ':hover': {
                bgcolor: palette.lightBlue[700]
              }
            }} />

        </Grid>

      </Grid>


    </>
  )
}

export default PageHeader


