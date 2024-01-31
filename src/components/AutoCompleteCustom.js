'use client'
import { Autocomplete, TextField } from '@mui/material';

export default function AutoCompleteCustom(props) {
  const { options, sx,label, value, onChange,rows, ...otherProps} = props;

  const handleChange = (event, selectedValue, selectedRowId, id, templateStatus, taxStatus, variationsStatus) => {

    onChange(selectedValue?.label, selectedRowId,id, templateStatus, taxStatus , variationsStatus);
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
