import React from 'react'
import MyTeam from '../parts/talent/MyTeam'
import Plusses from '../parts/pluses/Plusses'
import Results from '../parts/results/Results'
import Contact from '../../contactForm/Contact'
import './responsiveStyles.css'

function Index() {
  return (
    <div>
      <MyTeam/>  
      <Plusses/>
      <Results/>
      <Contact/>
    </div>
  )
}

export default Index