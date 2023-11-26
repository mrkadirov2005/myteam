import React from 'react'
import icon from './img/reviews-bg-left.svg'
import './Results.css'
import quotes from './img/icon-quotes.svg'
import kady from './img/kady.png'
import aisha from './img/aisha.png'
import arthur from './img/arthur.png'
import right from './img/reviews-bg-right.svg'

function Results() { 
  return (
    <div className='results_wrapper'>
      <img className='icon_of_result' src={icon} alt='icon' />
      <div className='content_wrapper'>
        <h1 className='title_of_result'>Delivering real results for top companies. Some of our <strong className='success_stories'>success stories.</strong></h1>
        <div className='info_wrapper'>
          <div className='cards'>
            <img className='quotes_img' alt='quotes' src={quotes} />
            <p className='user_info_detailed'> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
            <h1 className='user_name'>Kady Baker</h1>
            <span className='user_info'>Product Manager at Bookmark</span>
            <img className='personimg' alt='user kady' src={kady} />
          </div>
          <div className='cards'>
            <img className='quotes_img' alt='quotes' src={quotes} />
            <p className='user_info_detailed'> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <h1 className='user_name'>Aiysha Reese</h1>
            <span className='user_info'>Founder of Manage</span>
            <img className='personimg' alt='user kady' src={aisha} />
          </div>
          <div className='cards'>
            <img className='quotes_img' alt='quotes' src={quotes} />
            <p className='user_info_detailed'> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            <h1 className='user_name'>Arthur Clarke</h1>
            <span className='user_info'>Co-founder of MyPhysio</span>
            <img className='personimg' alt='user kady' src={arthur} />
          </div>

        </div>
      </div>
      <img className='right_icon' src={right}  alt=''/>


    </div>
  )
}

export default Results