'use client'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

export default function SwitchLabels(props) {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch  />} label={props.label} />
    </FormGroup>
  );
}