'use client'
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

export default function ControlledCheckbox(children) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
   
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    >
      {children}
    </Checkbox>
  );
}
