import { Autocomplete, TextField } from '@mui/material';

export default function AutoCompleteCustom(props) {
  const { options, sx,label, value, onChange, ...otherProps} = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
      onChange={onChange}
      sx={sx}
      {...otherProps}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}
