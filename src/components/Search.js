import { Search } from '@mui/icons-material';
import { FormControl, Input, InputAdornment } from "@mui/material";

export const SearchInput = () => {
  return (
    <>
      <FormControl variant="outlined" >
        <Input
          id="input-with-icon-adornment"
          placeholder='Search (Ctrl+/)'
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  )
}