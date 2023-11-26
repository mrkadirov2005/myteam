import React from 'react'
import Button from '../Button'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { about, home, myteam } from '../../features/headerToggler/headerPart'

function Header() {
  // const myteam=useSelector((state)=>state.headerReducer.myteam)
const dispatch=useDispatch()




  return (
    <header  className='site__header'>
        <nav className='site_navigator'>
        <ul className='site__nav_ul'>
            <button onClick={()=>dispatch(myteam())} className='highlighted'>myteam</button>
            <button onClick={()=>dispatch(home())} className='site__nav_li'>home</button>
            <button  onClick={()=>{dispatch(about())}} className='site__nav_li'>about</button>

        </ul>
        <Button/>
    </nav>
    </header>
  )
}

export default Header