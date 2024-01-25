import { TextField } from '@mui/material';
const TextFieldCustom = (props) => {
  const { id, label, value, variant, placeholder, onChange,select, ...otherProps} = props;
  return (
     <TextField
      id={id}
      label={label}
      select = {select}
      value={value}
      variant={variant}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      {...otherProps}
      />
  )
}

export default TextFieldCustom