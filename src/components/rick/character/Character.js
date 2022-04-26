import React from 'react'

const Character = ({ character }) => {
  return (
    <div className='row'>
      {
        character.map((item, index) => (

          <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth:"200px"}}>
              <img src={item.image} alt="imagenes de una api" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Estado:{item.status}</p>
                <p className="card-text">Especie:{item.species}</p>
              </div>
            </div>
          </div>

        ))}

    </div>
  )
}

export default Character