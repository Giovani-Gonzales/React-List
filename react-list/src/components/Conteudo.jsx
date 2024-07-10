import {useState} from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div`
    background: ${props => props.estado ? 'white':'#eee'};
    margin-bottom: 16px;
    padding: 16px;
    text-align: center;
    text-decoration: ${props => props.estado ?'line-through':'none'};

`


const Conteudo = ({texto}) => {

    const [ feito, setFeito] = useState(false)

    function Alternar(){
        setFeito(!feito)
    }

  return <ModeloConteudo onClick={ Alternar } estado={feito}>
    {texto}
  </ModeloConteudo>
}

export default Conteudo
