import { palette } from '@/style/color';
import { variants } from '@/utils/variants';
import { Divider, Grid } from '@mui/material';
import AutoCompleteCustom from '../AutoCompleteCustom';
import ControlledCheckbox from '../CheckBox';
import CustomButton from '../CustomButton';
import SwitchLabels from '../SwitchLabels';
import { TypographyCustom } from '../TypographyCustom';

const FilterCard = (props) => {
  const {
    variant = "subtitle2",
    headerText,
    backgroundColor = palette.grey[50],
    borderColor = palette.grey[300],
    statusOptions,
    value,
    onChange,
    filterCardOptionStatus,
    autoCompleteLabel,
    filterCardHeaderCheckBox,
    filterCardCheckBoxText1,
    filterCardCheckBoxText2,
    filterCardHeaderSwitch,
    filterCardStatusTextSwitch,
    filterCardTextButton1,
    filterCardTextButton2,
    ...otherProps } = props;

  const subtitle1 = variants.typography.subtitle1;
  const subtitle2 = variants.typography.subtitle2;
  const caption = variants.typography.caption;

  return (
    <Grid fluid item xs={12} sx={{
      display: 'flex',
      justifyContent: 'start',
      position: "absolute", zIndex: "modal",
      center: 'center',
      m: 5,
      p: 3,
      backgroundColor: backgroundColor,
      border: 2,
      borderColor: borderColor,
      borderRadius: 1,
    }}
      {...otherProps}
    >
      <Grid container maxWidth={300} spacing={2}>
        {/* HEADER - Filter Options TEXT */}
        <Grid item xs={12} >
          <TypographyCustom
            variant={subtitle1}
            text={headerText}
            fontWeight="700"
          />
        </Grid>
        {/*DIVIDER */}
        <Grid item xs={12}  >
          <Divider orientation='horizontal' />
        </Grid>
        {/* STATUS CONTENT - HEADER */}
        <Grid item xs={12} >
          <TypographyCustom
            variant={subtitle2}
            text={filterCardOptionStatus}
            fontWeight="600"
          />
        </Grid>

        {/*STATUS CONTENT - SELECT OPTIONS */}
        <Grid item xs={12} >
          <AutoCompleteCustom
            size="small"
            options={statusOptions}
            value={value}
            onChange={onChange}
            label={autoCompleteLabel}
            sx={{
              backgroundColor: palette.grey[100]
            }}
          />
        </Grid>
        {/* MEMBER TYPE CONTENT - HEADER */}
        <Grid item xs={12}>
          <TypographyCustom
            variant={subtitle2}
            text={filterCardHeaderCheckBox}
            fontWeight={600}
          />
        </Grid>
        {/* MEMBER TYPE CONTENT - CHECKBOX */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'gray' }}>
          <ControlledCheckbox />
          <TypographyCustom text={filterCardCheckBoxText1} variant={caption} />
          <ControlledCheckbox />
          <TypographyCustom text={filterCardCheckBoxText2} variant={caption} />
        </Grid>
        {/* NOTIFICATIONS CONTENT - HEADER */}
        <Grid item xs={12}>
          <TypographyCustom
            variant={subtitle2}
            text={filterCardHeaderSwitch}
            fontWeight={600}
          />
          {/* NOTIFICATIONS CONTENT - SWITCHER */}
          <SwitchLabels
            label={filterCardStatusTextSwitch}
          />
        </Grid>
        {/* BOTTOM BUTTON */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
          {/* BOTTOM BUTTON - RESET */}
          <CustomButton buttonText={filterCardTextButton1}
            onClick={() => alert('Reset Button Clicked')}
            sx={{
              bgcolor: palette.grey[500],
              ':hover': {
                bgcolor: palette.grey[700]
              }
            }}
          />
          {/* BOTTOM BUTTON - APPLY */}
          <CustomButton buttonText={filterCardTextButton2}
            onClick={() => alert('Apply Button Clicked')}
            sx={{
              ml: 1,
              bgcolor: palette.lightBlue[500],
              ':hover': {
                bgcolor: palette.lightBlue[700]
              }
            }} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FilterCard