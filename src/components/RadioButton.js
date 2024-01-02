// RadioButton.js
import { palette } from '@/style/color';
import { FormControlLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
export default function RadioButton({ onSelect, value, selectedValue }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <FormControlLabel
      control={
        <Radio checked={value === selectedValue} onChange={handleChange} sx={{
    '&.Mui-checked': {
      color: palette.deepPurple[400],
        }}} />
      }
      value={value}

    />
  );
}
