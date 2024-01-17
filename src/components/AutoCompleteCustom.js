'use client'
import { Autocomplete, TextField } from '@mui/material';

export default function AutoCompleteCustom(props) {
  const { options, sx,label, value, onChange,rows, ...otherProps} = props;

  const handleChange = (event, selectedValue, selectedRowId) => {
    // Find the corresponding row object based on the selected value

    // Call the parent component's onChange handler with the selected value and row object
    onChange(selectedValue, selectedRowId);
    console.log('selected value: ' , selectedValue);
    console.log('selected row: ', selectedRowId);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
      onChange={handleChange}
      rows={rows}
      sx={sx}
      {...otherProps}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}
