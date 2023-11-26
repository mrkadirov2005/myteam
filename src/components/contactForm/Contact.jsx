import React from 'react'
// import styled from 'styled-components'
import img from '../img/contact__form.svg'
import Button from '../Button'
import { IMG, WRAPPER,TEXTS,HEADING} from './styles'





 

function Contact() {
  return (
    <WRAPPER>
        <IMG src={img} alt='icon'/>
        <TEXTS>
            <HEADING>Ready to get started?</HEADING>
            <Button/>
        </TEXTS>
    </WRAPPER>
  )
}

export default Contact