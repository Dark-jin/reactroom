import { Button, createTheme, ThemeProvider } from '@mui/material';
import { lightGreen, purple } from '@mui/material/colors';
import React from 'react';

function colortheme() {
    const theme = createTheme({
        palette: {
          primary:{
            main : purple[500]
          },
          secondary:{
            main: lightGreen[500]
          }
        }
      })
    return(
        <ThemeProvider theme={theme}>
          <Button variant='contained' color='primary'>Button</Button>
          <Button variant='contained' color='secondary'>Button</Button>
        </ThemeProvider>
    )
}
export default colortheme;