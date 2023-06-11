import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  </ThemeProvider>
)
