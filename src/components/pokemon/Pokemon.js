import React, {useEffect, useState} from 'react'
import Character from './chatacter/Character';

const Pokemon = () => {

    const [pokemoncito, setPokemoncito]=useState([]);



const consulta = () =>{
    const url="https://pokeapi.co/api/v2/pokemon";
    const peticion =fetch(url);
    peticion
    .then(datos =>datos.json())
    .then(lectura =>{
        setPokemoncito(lectura.results)
    })
    .catch(()=>console.log("vamos mal pendejo"))
}




    useEffect (()=>{
        consulta();

    })


  return (
    <div className='container' >
        <Character pokemoncito={pokemoncito}/>
    </div>
  )
}

export default Pokemon