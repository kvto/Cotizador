import React, { useEffect, useState } from 'react'
import useStyles from "../Styles/styles";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Grid } from '@material-ui/core';
import {getUsers} from '../Actions/action';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';


const validate = function (input) {
  let error = {}
  
  if (input.name=="default") error.name = "🚫 Debe eligir una opcion🚫"
  if (input.car==="default") error.name = "🚫 Debe eligir una opcion🚫"
  if (input.plan==="default") error.name = "🚫 Debe eligir una opcion🚫"
  return error
}

export default function Home() {
  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({
        name: [],
        car: [],
        plan: []
    })
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  function handleSelect(e) {
    setInput({
        ...input,
        name: [...input.name, e.target.value]
    })
}


function handleSubmit(e) {
  e.preventDefault()
  setErrors(validate(input))
  const errorSaver = validate(input)
  if (Object.values(errorSaver).length !== 0) {
      alert('Error a la hora de rellenar los datos, verifique 🛑');        
  }
  else {
      alert('La raza fue agregada correctamente!✅');
      setInput({
        name: [],
        car: [],
        plan: []
      });
  }
}

  const theme = createTheme();
    const classes = useStyles(); 
  return (
    <div>
      Cotizador Vehiculos
      <Grid item key={characters} xs={4} sm={6} md={12}>
      <select 
      onChange={(e) => handleSelect(e)} 
      className={classes.list}
      name="name">
        <option value="default">Cliente 👨</option>
        {
          characters.map((user) => (
            <option
              key={user.id}
              value={user.name}
            >{user.name}</option>
          ))
        }
      </select>
      <select 
      onChange={(e) => handleSelect(e)} 
      className={classes.list}
      name="car">
        <option value="default">Automovil 🚗</option>
        <option value="car001">VW Gol y Trend 10.114</option>
        <option value="car002">Chevrolet Corsa y Classic: 5.913</option>
        <option value="car003">Renault Clio 4.406</option>
        <option value="car004">Toyota Hilux 4.119</option>
        <option value="car005">Ford Fiesta 3.877</option>
        <option value="car006">Fiat Palio 3.497</option>
        <option value="car007">Ford Focus 3.336</option>
        <option value="car008">Ford Ranger 3.150</option>
        <option value="car009">Ford Ka 3.148</option>
        <option value="car010">Ford EcoSport 3.102</option>
      </select>

      <select 
      onChange={(e) => handleSelect(e)} 
      className={classes.list}
      name="plan">
        <option value="default">Tipo de plan </option>
        <option value="compl">Protección completa 📈</option>
        <option value="limi">Protección limitada 📉</option>
        <option value="robo">Solo robo 📉</option>
      </select>

      <button
                        className="createDogButton"
                        type="submit"
                        
                        disabled={input.name.length <= 2 ? true : false}
                       onClick={(e) => handleSubmit(e)}
                    >Crear Raza‼️‼️</button>
      </Grid>
    </div>
  )
}
