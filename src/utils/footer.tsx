import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Footer() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >

        <Box
          component="footer"
          sx={{
            mt: 'auto',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Footer Test
            </Typography>
          </Container>
        </Box>
      </Box>
  );
}