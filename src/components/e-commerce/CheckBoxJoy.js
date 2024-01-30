import Checkbox from '@mui/joy/Checkbox';

const CheckBoxJoy = ({sx, otherProps}) => {
  return (
    <Checkbox 
    label="Yes" 
    variant="solid" 
    color='neutral'
    size='md'
    defaultChecked 
    sx={sx}
     {...otherProps}
    />

  )
}

export default CheckBoxJoy