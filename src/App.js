import React from 'react'
import Chistes from './components/chistes/Chistes'
import Personas from './components/personas/Personas'
import Pokemon from './components/pokemon/Pokemon'
import Rick from './components/rick/Rick'
import Todos from './components/todosloschistes/Todos'

const App = () => {
  return (
    <div> 
      <Rick/>
        <Personas/>
        <Chistes/>
        <Pokemon/>
        <Todos/>
       
        
    </div>
  )
}

export default App