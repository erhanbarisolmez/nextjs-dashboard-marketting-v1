import { SearchInput } from '@/components/Search';
import { Box } from '@mui/material';
import NavLinks from './nav-links';

const Navbar = () => {
  
  return (
    <>
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 5, mb: 5
      }}>

        <SearchInput />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,       
          color:'gray'
        }}>
          
         <NavLinks />
        </Box>
      </Box>

    </>
  )
}

export default Navbar