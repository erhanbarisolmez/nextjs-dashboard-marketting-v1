
import { Search } from '@mui/icons-material';
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

const SearchInput = ({
  searchInputText
}) => {
  return (
    <FormControl variant="outlined" >
      <Input
        id="input-with-icon-adornment"
        placeholder={searchInputText} // Search (Ctrl+/)
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchInput