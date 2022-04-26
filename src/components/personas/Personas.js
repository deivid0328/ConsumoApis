import React, { useEffect, useState } from 'react'
import '../../App.css'

const Personas = () => {

    const [datos, setDatos]=useState([])

    useEffect (() =>{
        const url="https://randomuser.me/api/?results=3";
        const peticion=fetch(url);
        peticion
        .then( datos => datos.json())
            .then(lectura=>{
              lectura.results.map((persona)=>{
                  setDatos((e) => 
                  [...e, <div key={persona.email}>
                      <div>{persona.name.first} {persona.name.last}</div>
                      <div>
                          <img src={persona.picture.large} alt={persona.name.first}/>
                      </div>
                  </div>])
                  })
            })
        .catch (()=>console.log("error pendejo"))
    }, [])







    //Cualo se realiza la consulta pero solo estoy solicitando un dato


    // const [nombre, setNombre]=useState("");
    // const [img, setImg]=useState();

    // useEffect (() =>{
    //     const url="https://randomuser.me/api/";
    //     const peticion=fetch(url);
    //     peticion
    //     .then( datos => datos.json())
    //     .then(lectura=>{
    //         setNombre(lectura.results[0].name.first)
    //         setImg(lectura.results[0].picture.large)
    //     })
    //     .catch(() =>console.log("Error pendejo"))
    // },[])
    


    return (
    <>
    <div className='containerr'>

        <div className='container__nombre'>
            <h1>La personas que piensa en tí es:</h1>
           {datos}
        </div>
  
    </div>


    </>
  )
}

export default Personas
