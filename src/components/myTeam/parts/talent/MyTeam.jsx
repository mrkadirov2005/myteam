import React from 'react'
import './MyTeam.css'
import background from './img/Rectangle.svg'
import round from './img/Combined Shape Copy.svg'
import dotsCombined from './/img/Combined Shape.svg'
import bottomImg from '../talent/img/Group 7.svg'

function MyTeam() {

  return (
    <section class="container">
      <div className='wrapper'>
        <div className='imgWrapper'>
          <div className='picturesWrapper'>
            <img className='background' src={background} alt='icon of myTeam' />
            <img className='round' src={round} alt='icon of myTeam' />
            <img className='dotsCombined' src={dotsCombined} alt='icon of myTeam' />
          </div>
        </div>
        <h1 className='title'>Find the <br className='teamBR' /> right <strong>product</strong>  </h1>
        <div className='myteam_text'>
          <h1 className='slash'>____</h1>
          <br />
          <p className='text'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
      </div>
      <img className='bottomImg' src={bottomImg} />
    </section>

  )
}

export default MyTeam