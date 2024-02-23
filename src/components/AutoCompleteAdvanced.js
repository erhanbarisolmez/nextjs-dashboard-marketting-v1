'use client'
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import { TypographyCustom } from './TypographyCustom';

export default function AutoCompleteAdvanced({
  defaultValue,
  options,
  placeholder,
  getOptionLabel,
  headerText,
  bottomText,
  sx
}) {
  return (
    <FormControl size="sm">
      <FormLabel>
        {headerText &&(
        <TypographyCustom 
          variant = "subtitle2"
          text = {headerText}
          fontWeight = "600"
        />
        )}
      </FormLabel>
      <Autocomplete
        multiple
        placeholder={placeholder} //"Select an option"
        options={options} //top100Films
        getOptionLabel={getOptionLabel} // (option) => option.title
        defaultValue={defaultValue} //[top100Films[13]]
        sx={sx}
        
      />
      {bottomText &&(
      <FormHelperText style={{opacity:0.6}}>{bottomText}</FormHelperText>
      )}
    </FormControl>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
