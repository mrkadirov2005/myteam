import React from 'react'
import './footer.css'
import instagram from '../img/Path.svg'
import facebook from '../img/Path (1).svg'
import twitter from '../img/Path (2).svg'


function Footer() {
  return (
    <footer className='site__footer'>
    <div className='footer__inside_wrapper'>
       <div className='left__part'>
       <nav className='footer__nav'>
            <h1 className='highlighted_myteam'><a href='#'>myteam</a></h1>
            <ul className='site__footer_partI'>
                <li className='site__footer_ul_list' ><a> home </a> </li>
                <li className='site__footer_ul_list' ><a> about </a>  </li>

            </ul>
        </nav>
        <nav className='footer__nav2'>
           <li className='footer_lists'><a href='#'>987 Hillcrest lone</a>    </li>
           <li className='footer_lists'><a href='#'>Irvine, CA</a>            </li>
           <li className='footer_lists'>  <a href='#'>California 92714</a></li>
           <li className='footer_lists'><a href='#'>Call us:949-833-7432</a>  </li>

        </nav>
       </div>

      <div className='social_media'> 
      
      <div className='mediaSources'>
      <img src={instagram}></img>
      <img src={facebook}></img>
      <img src={twitter}></img>
      </div>

      <h4 className='copyright'>Copyright 2020. All Rights Reserved</h4>
       </div>


    
        
    </div>
    
    </footer>
  )
}

export default Footer