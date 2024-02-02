import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const IncrementDecrementTextField = ({ ...otherProps }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    
  }
  return (
    <TextField
      value={value}
      onChange={handleChange}
      InputProps={{
        type:'number',
        endAdornment: (
          <InputAdornment position="end" >
     
          </InputAdornment>
        ),
      }}  
      sx={{ mt: 3 }}
      {...otherProps}
    />
  );
};

export default IncrementDecrementTextField;
