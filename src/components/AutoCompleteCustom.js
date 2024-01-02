import { Autocomplete, TextField } from '@mui/material';

export default function AutoCompleteCustom(props) {
  const { options, sx,label, value, onChange} = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
      onChange={onChange}
      sx={sx}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}
