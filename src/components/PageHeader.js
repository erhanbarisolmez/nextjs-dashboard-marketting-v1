'use client'
import { palette } from "@/style/color";
import { variants } from "@/utils/variants";
import FilterIcon from '@mui/icons-material/FilterAlt';
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CreateCard from "./e-commerce/products/CreateCard";
import FilterCard from "./e-commerce/products/FilterCard";


const PageHeader = ({
  headerText,
  statusOptions,
  filterButtonText,
  createButtonText,
  filterCardHeaderText,
  filterCardOptionStatus,
  autoCompleteLabel,
  filterCardHeaderCheckBox,
  filterCardCheckBoxText1,
  filterCardCheckBoxText2,
  filterCardHeaderSwitch,
  filterCardStatusTextSwitch,
  filterCardTextButton1,
  filterCardTextButton2,
}) => {

  const [isFilterCardOpen, setIsFilterCardOpen] = useState(false);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
  const handleClose = () => setIsCreateCardOpen(false);

  const [status, setStatus] = useState();
  const contained = variants.button.contained;

  const onClickFilteredButton = () => {
    setIsFilterCardOpen(!isFilterCardOpen);
  }
  
  const onClickCreateButton = () => {
    setIsCreateCardOpen(!isCreateCardOpen);
  
  }

  return (
    <>
      <Grid container>
        {/* HEADER TEXT */}
        <Grid item xs={6} textAlign={"start"}>
          <Typography variant="h6" fontWeight="bold" >
            {headerText}
          </Typography>
        </Grid>
        {/* FILTER BUTTON */}
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
          <CustomButton
            variant={contained}
            onClick={onClickFilteredButton}
            buttonText={filterButtonText}
            startIcon={<FilterIcon sx={{ color: palette.grey[300], fontSize: "12px" }} />}
            sx={{
              bgcolor: palette.grey[500],
              ':hover': {
                bgcolor: palette.grey[700]
              }
            }}
          />
          {/* FILTER CARD */}
          {isFilterCardOpen && (
            <FilterCard
              headerText={filterCardHeaderText}
              filterCardOptionStatus={filterCardOptionStatus}
              autoCompleteLabel={autoCompleteLabel}
              statusOptions={statusOptions}
              filterCardHeaderCheckBox={filterCardHeaderCheckBox}
              filterCardCheckBoxText1={filterCardCheckBoxText1}
              filterCardCheckBoxText2={filterCardCheckBoxText2}
              filterCardHeaderSwitch={filterCardHeaderSwitch}
              filterCardStatusTextSwitch={filterCardStatusTextSwitch}
              filterCardTextButton1={filterCardTextButton1}
              filterCardTextButton2={filterCardTextButton2}
              value={status}
              onChange={(e, newValue) => setStatus(newValue)}
            />
          )}
          {/* CREATE BUTTON */}
          <CustomButton
            variant={contained}
            onClick={onClickCreateButton}
            buttonText={createButtonText}
            sx={{
              ml: 1,
              bgcolor: palette.lightBlue[500],
              ':hover': {
                bgcolor: palette.lightBlue[700]
              }
            }} />
          {/* CREATE CARD */}
          {isCreateCardOpen &&(
            <CreateCard 
            openModal={onClickCreateButton}
            handleClose={handleClose}
            />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default PageHeader


