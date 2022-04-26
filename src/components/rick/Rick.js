import React, { useEffect, useState } from 'react'
import Character from './character/Character';
import Navbar from './navbar/Navbar'
import Paginatio from './pagination/Paginatio';

const Rick = () => {

    const [character, setCharacter] = useState([]);
    const [info , setInfo]=useState({});
   
    
    const fetchCharacter = () => {
        const url = "https://rickandmortyapi.com/api/character";
        const peticion = fetch(url);
        peticion
            .then(datos => datos.json())
            .then(lectura => {
                setCharacter(lectura.results);
                setInfo(lectura.info);
            })
            .catch(() => console.log("No se ha podido conectar"))
    }


    const onPrevious = () =>{
        fetchCharacter(info.prev);
    }

  const onNext = () =>{
    fetchCharacter(info.next);
    }


    useEffect(() => {
        fetchCharacter();

    }, [])





    return (
        <>
            <Navbar />
            <Paginatio prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            <div className='container mt-5 '>
            <Character character={character}/>
            <Paginatio prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            </div>
           
        </>

    )
}

export default Rick