import React from 'react'
import './about.css'
import bottomImg from './img/Group_8.svg'
function About() {
  return (
    <div className='about_wrapper'> 
        <h1 className='about_heading'>About</h1>
        <div className='about_info_container'>
         <h1 className='paragraph_underline'>_____</h1>
         <article className='about_details'>
         We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.

         </article>
 
        </div>
        <img className='about_bottom_img'    src={bottomImg} alt='helf_square'  />
    </div>
  )
}

export default About 