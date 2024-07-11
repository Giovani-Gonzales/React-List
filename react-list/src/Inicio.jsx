import React from 'react'
import Titulo from './components/Titulo'
import Campo from './components/Campo'
import Conteudo from './components/Conteudo'
import Entrada from './components/Entrada'



import { useState } from 'react'

const Inicio = () => {

  function Adicionar(e){
    const valor = e.target.conteudo.value
    setLista([...lista, valor])
    e.preventDefault()
  }

  const [lista, setLista] = useState([])

  return (
    <div>
      <Titulo nome = 'Velejando com o React'/>
      <Campo id='1'>
        <form onSubmit={Adicionar}>
          <Entrada/>
        </form>
      </Campo>

      <Campo id='2'>
      {
          lista.map((item, index) => {
            return <Conteudo key={index} texto={item}/>
          })
        }
      </Campo>
    </div>
    
  )
}

export default Inicio
