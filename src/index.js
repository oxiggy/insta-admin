import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './index.css';
//
import App from 'components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
