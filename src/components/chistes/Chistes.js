import React, {useState, useEffect} from 'react'

const Chistes = () => {

    const [chiste, setChiste]=useState("");
    const [numChiste, setNumChiste]=useState("");
    
    const otrochiste = () =>{
        const url="https://api.icndb.com/jokes/random";
        const peticion=fetch(url); 
        peticion
        .then (datos => datos.json())
        .then (lectura =>{
            setChiste(lectura.value.joke)
            setNumChiste(lectura.value.id)
   
        })
        
        .catch(()=>console.log("todo bien"))
    }

    useEffect (()=>{
    otrochiste()
    },[])



  return (
    <div>
        <h1>Chiste Numero: {numChiste}</h1>
        <p>{chiste}</p>
        <button onClick={otrochiste}>Otro chiste</button>
    </div>
  )
}

export default Chistes


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