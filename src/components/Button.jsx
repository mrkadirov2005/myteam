import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { contact } from '../features/headerToggler/headerPart'
function Button() {
const dispatch=useDispatch()
  const Wrapper=styled.button`
    background-color: transparent;
    padding: 3px 12px;
    border-radius: 10px;
    color: white;
    border: 2px solid white;
    &:hover{
      background-color: grey;
    }
    &:active{
      background-color:  white;
      color: black;
    }
    
    `
  return (
    <Wrapper onClick={()=>dispatch(contact())}>contact us</Wrapper>
  )
}

export default Button