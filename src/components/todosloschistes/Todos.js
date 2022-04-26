import React, { useEffect, useState } from 'react'
import '../../App.css';



const Todos = () => {

    const [datos, setDatos]=useState("");

    useEffect (() =>{
        const url="https://api.icndb.com/jokes/";
        const peticion=fetch(url);
        peticion
        .then(datos => datos.json())
        .then(lectura=>{
            lectura.value.map((persona)=>{
                setDatos((e) => 
                [...e, <div key={persona.id} className="chiste">
                    <h2>{persona.joke} </h2>
                
                </div>])
                })
          })
        .catch(()=>console.log("esta mal ñero"))
    },[])

  return (
    <div className='contenedor__chiste'>{datos}</div>
  )
}

export default Todos