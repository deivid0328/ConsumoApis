import React from 'react'

const Character = ({ pokemoncito }) => {


  return (
    <div className='row'>
      {
        pokemoncito.map((item, index) => (

          <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth:"200px"}}>
              {/* <img src={item.name} alt="imagenes de una api" /> */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <a href={item.url}> VER MÁS</a>
                <a>{index+1}</a>
           
              </div>
            </div>
          </div>

        ))}

    </div>
  )
}

export default Character