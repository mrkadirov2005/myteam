import React from 'react'
import About from '../parts/about/About'
import styled from 'styled-components'
import Directors from '../parts/directors/Directors'
import Clients from '../parts/clients/Clients'
import Contact from '../../contactForm/Contact'

function Aboutindex() {

  const DIVWRAPPER=styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  /* background-color */

  `
  return (
    <DIVWRAPPER>

    <About/>
    <Directors/>
    <Clients/>
    <Contact/>
     </DIVWRAPPER>
  )
}

export default Aboutindex