import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({value}) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      <Rating name="read-only" defaultValue={2} value={value} readOnly />
  
    </Box>
  );
}