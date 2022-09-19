import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing.js';
import useStyles from "./Styles/styles";
import { createTheme, ThemeProvider } from '@material-ui/core';

import './App.css';
import Home from './Components/Home.js';
function App() {
  const theme = createTheme();
    const classes = useStyles(); 
  return (
     <div className={classes.app}>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>
    </div> 
   
  );
}

export default App;
