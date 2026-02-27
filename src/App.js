import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import {Routes,Route,useLocation } from 'react-router-dom';
import Serviceone from './Pages/Serviceone';
import Portfoliopage from './Pages/Portfoliopage';
import Contactpage from './Pages/Contactpage';
import Erp from './Pages/Erp';
import Crm from './Pages/Crm';
import Digital from './Pages/Digital';
import Finetech from './Pages/Finetech';
import Mobile from './Pages/Mobile';
import { Box } from '@mui/material';

import Techstack from './components/Techstack';
import Mainchat from './Chat/Mainchat';
import "./Chat/index.css";
import './Chat/theme';







const theme = createTheme({
  palette: {
    primary: {
      main: '#7b2cbf',
      dark: '#1a0b2e',
    },
    secondary: {
      main: '#c9184a',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily:  ` "Poppins" `,
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
   const location = useLocation();

  // Hide Navbar & Chatbot only on ERP page
  const hideLayout = location.pathname === "/erp";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
         {!hideLayout && <Navbar />}
        
         <Box sx={{ pt: hideLayout ? 0 : "0px" }}></Box>
     <Routes>
  <Route path="/" Component={Home } />
  <Route path="/about" Component={About } />
  <Route path="/serviceone" Component={Serviceone } />
  <Route path="/portfoliopage" Component={Portfoliopage } />
  <Route path="/portfoliopage/:category" Component={Portfoliopage } />
  <Route path="/techstack" Component={Techstack } />
  <Route path="/contactpage" Component={Contactpage } />
  <Route path="/portfolio/erp" Component={Erp} />
    <Route path="/crm" Component={Crm } /> 
     <Route path="/mobile" Component={Mobile} />  
    <Route path="/finetech" Component={Finetech } />
      <Route path="/digital" Component={Digital} />
  
</Routes>
     
      {!hideLayout && <Mainchat />}
    </ThemeProvider>
    
  );
}
export default App;