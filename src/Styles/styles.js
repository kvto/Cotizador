import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export default makeStyles(() => ({
    
    //Estilos para el componente APP.js
    app: {
        textAlign: "center",
        "& h1": {
            marginTop: theme.spacing(3),
            [theme.breakpoints.down("sm","md")]:{
                fontSize: "90px",
            }
          },
            "& p": {
              [theme.breakpoints.down("md")]:{
                display: "none",
              },
          },
          
    },
    
    //Estilos para el componente APP.js
    logo: {
        position: "absolute",
      left: "76.39%",
      right: "9.74%",
      top: "79.08%",
      bottom: "15.49%",
      width: "200px",
      height: "60px",
      [theme.breakpoints.down("md")]:{
        width: "100px",
        height: "30px"
      },
      },
      title: {
        position: "absolute",
left: "9.58%",
right: "8.47%",
top: "22.83%",
fontFamily: "Lato",
fontStyle: "normal",
fontWeight: "200",
fontSize: "120px",
lineHeight: "144px",
/* or 106% */
display: "flex",
alignItems: "center",
color: "#FFFFFF",
},
subtitle:{
    position: "absolute",
left: "11.58%",
right: "49.65%",
top: "25.8%",
bottom: "15.22%",

fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "300",
fontSize: "20px",
lineHeight: "44px",
display: "flex",
alignItems: "center",
letterSpacing: "2px",
color: "#FFFFFF",
},
icons:{
    alignItems: "center",
    display: "flex",
    position:"relative",
    marginTop: "2ex",
    marginLeft: "2ex",
    width: "40px",
    height: "40px",
    top: "30%",
    left: "600%",

},
icon:{
        display: "flex",
        bottom: "auto",
},
buttom:{
    position: "absolute",
      left: "76.39%",
      right: "9.74%",
      top: "70.08%",
      bottom: "15.49%",
      width: "160px",
      cursor: "pointer",
      height: "60px",
      color: "#FFFFFF",
      borderRadius:"10px",
    outline:"none",
      [theme.breakpoints.down("md")]:{
        width: "100px",
        height: "30px"
      },
      background: "#FC4E55",
      padding: theme.spacing(3),
      "&:hover":{
        background: "#FC4E55",
      }
},

list:{
    borderRadius: "1ex",
    marginInlineStart: "5ex",
    /*define el margen de inicio en línea lógico de un elemento, que se asigna a un margen físico 
    según el modo de escritura, la direccionalidad y la orientación del texto del elemento*/
    backgroundColor: "rgb(37, 50, 58, 0.5)",
    cursor: "pointer",
    right: "6.39%",
    width: "23ex",
    height: "4ex",
    textAlign: "center",
    top: "10ex",
    position: "relative",
    fontFamily: "serif",
    fontSize: "1.9ex",
    fontWeight: "bold",
 color: "#ffa500",

}
}))

