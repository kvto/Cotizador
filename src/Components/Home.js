import React, { useEffect, useState } from 'react'
import useStyles from "../Styles/styles";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Grid } from '@material-ui/core';
import axios from "axios";




export default function Home() {
  let email1='';
  let phone1='';
  let user1='';
  let street1, suite1, city1= '';
  const [input, setInput] = useState({
        name: []
    })
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(false);
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
        name: [...input.name, e.target.value],
        
    })
}

function handleData() {
    characters.forEach((e)=>{
      if(input.name[0] === e.name)
      email1 = e.email
      phone1 = e.phone
      user1= e.username
      street1= e.address.street
      suite1= e.address.suite
      city1= e.address.city
    })
}

function price(){
  let priceA = parseInt(input.name[1])
  switch(input.name[2]){
    case 1:{
      
    }
  }
}

function handleSubmit(e) {
  e.preventDefault()
  alert('La raza fue agregada correctamente!✅');
setInfo(true)

}
  const classes = useStyles(); 
  return (
    <div>
      Cotizador Vehiculos
      <Grid item key={characters} xs={4} sm={12} >
      <select 
      onChange={(e) => {handleSelect(e)}} 
      className={classes.list}
      name="name">
        <option value="default">Cliente 👨</option>
        {
          characters?.map((user) => {
            return(<option
              key={user.id}
              value={
                user.name}
            >{user.name}</option>)
})
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
        <option value="10000">Protección completa 📈</option>
        <option value="5000">Protección limitada 📉</option>
        <option value="7000">Solo robo 📉</option>
      </select>
      </Grid>
      {console.log(input)}
      <button
                        className={classes.buttomHome}
                        type="submit"
                        
                        disabled={input.name.length <= 2 ? true : false}
                       onClick={(e) => handleSubmit(e)}
                    >Validar‼️</button>

                    {
                      !info ? (
                        
                      <div className={classes.form}>
                      <input className={classes.inputs}
                          type="text"
                          disabled
                          placeholder="Nombre del Cliente"/>

                      <input className={classes.inputs}
                          type="text"
                          disabled
                          placeholder="Email del Cliente"/>

                      <input className={classes.inputs}
                          type="text"
                          disabled
                          placeholder="Telefono del Cliente"/>

                      <input className={classes.inputs}
                          type="text"
                          disabled
                          placeholder="Usuario del Cliente"/>
      
      <Grid item key={characters} xs={4} sm={10} md={12}>
                  <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value="Calle"
                      disabled
                   /> 
                   <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value='Suite'
                      disabled
                   /> 
                   <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value='Ciudad'
                      disabled
                   />
      </Grid>
                  </div>) : (
                  <div className={classes.form}>
                  <input className={classes.inputs}
                      type="text"
                      name="verificacion"
                      value={input.name[0]}
                      disabled
                      
                   />  
                   
                   {handleData()}
                    <input className={classes.inputs}
                      type="text"
                      name="verificacion"
                      value={email1}
                      size="1000"
                      disabled
                      
                   /> 
                   <input className={classes.inputs}
                      type="text"
                      name="verificacion"
                      value={phone1}
                      disabled
                   /> 
                    <input className={classes.inputs}
                      type="text"
                      name="verificacion"
                      value={user1}
                      disabled
                   /> 

<Grid item key={characters} xs={4} sm={6} md={12}>
                  <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value={street1}
                      disabled
                   /> 
                   <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value={suite1}
                      disabled
                   /> 
                   <input className={classes.inputs1}
                      type="text"
                      name="verificacion"
                      value={city1}
                      disabled
                   />   
</Grid>
              </div>
                          )
                    }
      
    </div>
  )
}
