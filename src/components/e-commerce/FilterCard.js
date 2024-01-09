import { palette } from '@/style/color';
import { variants } from '@/utils/variants';
import { Divider, Grid } from '@mui/material';
import AutoCompleteCustom from '../AutoCompleteCustom';
import ControlledCheckbox from '../CheckBox';
import CustomButton from '../CustomButton';
import SwitchLabels from '../SwitchLabels';
import { TypographyCustom } from '../TypographyCustom';

const FilterCard = (props) => {
  const { statusOptions, value, onChange } = props;
  const subtitle1 = variants.typography.subtitle1;
  const subtitle2 = variants.typography.subtitle2;
  const caption = variants.typography.caption;
  const {
    variant = "subtitle2",
    text = "Filter Options",
    backgroundColor = palette.grey[50],
    borderColor = palette.grey[300],
    ...otherProps } = props;
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
            text={text}
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
            text="Status:"
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
            label="Select option"
            sx={{
              backgroundColor: palette.grey[100]
            }}
          />
        </Grid>
        {/* MEMBER TYPE CONTENT - HEADER */}
        <Grid item xs={12}>
          <TypographyCustom
            variant={subtitle2}
            text="Member Type: "
            fontWeight={600}
          />
        </Grid>
        {/* MEMBER TYPE CONTENT - CHECKBOX */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'gray' }}>
          <ControlledCheckbox />
          <TypographyCustom text="Author" variant={caption} />
          <ControlledCheckbox />
          <TypographyCustom text="Customer" variant={caption} />
        </Grid>
        {/* NOTIFICATIONS CONTENT - HEADER */}
        <Grid item xs={12}>
          <TypographyCustom
            variant={subtitle2}
            text="Notifications: "
            fontWeight={600}
          />
          {/* NOTIFICATIONS CONTENT - SWITCHER */}
          <SwitchLabels
            label="Enabled"
          />
        </Grid>
        {/* BOTTOM BUTTON - RESET & APPLY */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
          {/* BOTTOM BUTTON - RESET */}
          <CustomButton buttonText="reset"
          onClick={() => alert('Reset Button Clicked')}
            sx={{
              bgcolor: palette.grey[500],
              ':hover': {
                bgcolor: palette.grey[700]
              }
            }}
          />
          {/* BOTTOM BUTTON - APPLY */}
          <CustomButton buttonText="apply"
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