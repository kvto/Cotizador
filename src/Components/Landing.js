import logo from'../img/R.png';
import useStyles from "../Styles/styles";
import githubicon from '../img/git.png';
import linkedin from '../img/linkid.png'
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Link } from "react-router-dom";


export default function Landing() {
    const theme = createTheme();
    const classes = useStyles(); 
      return (
        <ThemeProvider theme={theme}>
         <div className={classes.app}>
         <div className={classes.icon}>
            <a target="_blank" href={"https://www.linkedin.com/in/kevin913montero/"} rel="noopener noreferrer">
              <img className={classes.icons} src={linkedin} alt="LINK"></img>
            </a>
            <a target="_blank" href={"https://github.com/kvto"} rel="noopener noreferrer">
              <img className={classes.icons} src={githubicon} alt="GITHUB"></img>
            </a>
          </div>
              <h1 className={classes.title}>
               Cotizador 🚗
              </h1>
              <p className={classes.subtitle}>
                Desarrollador: Kevin J. Montero. Z 🤓
              </p>
              <img
                  className={classes.logo}
                  src={logo}
                  alt="">
                </img>
                <Link to="/home">
                <button className={classes.buttom}>
                     Enter
                </button>    
                </Link>
                
        </div> 
        </ThemeProvider>
      );
}
