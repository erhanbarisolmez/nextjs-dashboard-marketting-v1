import Checkbox from '@mui/joy/Checkbox';
import PropTypes from 'prop-types';
import { TabHeader } from './TabHeader';

const CheckBoxJoy = ({
  sx,
  defaultChecked,
  label,
  variant,
  color,
  size,
  text,
  ...otherProps
}) => {

  const defaultColor = "neutral";
  const defaultSize = "md";
  const defaultCheckedFalse = false;
  const defaultVariant = "soft"
  return (
    <>
    <Checkbox
      label={label}
      variant={variant || defaultVariant}
      color={color || defaultColor}
      size={size || defaultSize}
      defaultChecked={defaultChecked || defaultCheckedFalse}
      sx={sx}
      {...otherProps}
    />
    <br/>
    <TabHeader 
    level='body-sm'
    titleTextField={text}
    sxTitleTextField={{opacity:0.6, fontWeight:500}}

    />
    </>
  );
}

// Browser console  warning...
CheckBoxJoy.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['plain', 'outlined', 'soft', 'solid']).isRequired,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'danger', 'info', 'success', 'warning']).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired
}

export default CheckBoxJoy;