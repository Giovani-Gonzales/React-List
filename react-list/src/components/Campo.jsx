import React from 'react'
import styled from 'styled-components'

const ModeloCampo = styled.div`
    background: white;
    margin: 32px 0;
    padding: 16px;
`

const Campo = (props) => {
  return <ModeloCampo>
    {props.children}
  </ModeloCampo>
}

export default Campo
