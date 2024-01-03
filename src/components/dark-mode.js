'use client'

import { Box, Button } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from "react";

const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: setDarkMode ? 'light' : 'dark',

        },
      }),
    [],
  );

  return (
    <>

      <ThemeProvider theme={theme} >
        <Button onClick={toggleDarkMode} variant="contained" color="primary"
          sx={{
            backgroundColor: darkMode ? '#333' : '#fff', // Dark mode için arka plan rengi
            color: darkMode ? '#fff' : '#333', // Dark mode için metin rengi

          }}

        >
          Toggle Dark Mode
        </Button>
        <Box onChange={() => setDarkMode(toggleDarkMode)} sx={{
          backgroundColor: darkMode ? '#333' : '#fff', // Dark mode için arka plan rengi
          color: darkMode ? 'white' : 'gray', // Dark mode için metin rengi  
        
        }}>
          {children}
        </Box>
      </ThemeProvider>

    </>

  )
}

export default DarkMode