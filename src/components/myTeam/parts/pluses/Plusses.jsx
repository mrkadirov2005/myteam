import React from 'react'
import './Plusses.css'
import experienced from './img/icon-feature-experience.svg'
import implement from './img/icon-feature-implementation.svg'
import productivity from './img/icon-feature-productivity.svg'
import group from './img/Group 8.svg'
function Plusses() {
  return (
    <div className='containerOfP'> 
        <div class="wrapperOfP">
            <div className='title_part'>
            <h1>____</h1>
            <h1 className='titleOfP'>Build & manage distributed teams like no one else.</h1>
            </div>
            
            <div className='info_part'>
                <div className='listing'>
                    <img className='img_p' src={experienced}/>
                    <div className='experienced_details'>
                        <h1 className='experienced_heading'>Experienced Individuals</h1>
                        <p className='experienced_info'>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </div>
                <div className='listing'>
                    <img className='img_p' src={experienced}/>
                    <div className='experienced_details'>
                        <h1 className='experienced_heading'>Experienced Individuals</h1>
                        <p className='experienced_info'>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </div>
                <div className='listing'>
                    <img className='img_p' src={experienced}/>
                    <div className='experienced_details'>
                        <h1 className='experienced_heading'>Experienced Individuals</h1>
                        <p className='experienced_info'>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </div>

            </div>
        </div>
        <img className='btn_img' src={group}/>
    </div>
  )
}

export default Plusses