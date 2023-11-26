 import React from 'react'
 import './directors.css'
 import top_image from './Img/Group 8 lef.svg'
 import nikita from './Img/directorsimg/nikita.svg'
 import Cristian from './Img/directorsimg/cristian.svg'
 import Cruz from './Img/directorsimg/cruz.svg'
 import Drake from './Img/directorsimg/drake.svg'
 import griffin from './Img/directorsimg/griffin.svg'
 import bottomImg from './Img/directors-rect.svg'
 import twitter from './Img/myTeam_card_icons/Path.svg'
 import linkedIn from './Img/myTeam_card_icons/Shape.svg'
 import tick from './Img/team.png'



const DirectorsObjects=[
  { img:nikita,name:'Nikita Marks',position:'Founder & CEO'},
  { img:Cristian,name:'Critstian Duncon',position:'Co-founder & COO'},
  { img:Cruz,name:'Cruz Homer',position:'Co-founder & CTO'},
  { img:Drake,name:'Drake Heaton',position:'Business Development Lead'},
  { img:griffin,name:'Griffin Wise',position:'Lead Marketing'},



]



 function Directors() {
   return (
     <div className='directors_container'>
        <div class="directors_page_container">
          <img src={top_image} alt="icon" className='directors_top_image'/>
          <div className='directors_cards'>
              <h1 className='directors_card_heading'>Meet the directors</h1>
              <div className='cards_wrapper'>
                {DirectorsObjects.map(t=>{
                  return <div key={t.name} className='card_of_directors'>
                    <img src={t.img} className='director_img' alt={t.name}/>
                    <h1 className='director_name'>{t.name}</h1>
                    <h2 className='director_position'>{t.position}</h2>
                    <button  className='plus_button'> +</button>
                  </div>
                })}
                <div className='card_of_directors extra'>
                    <h1 className='director_name'>Aden Allan</h1>
                    <p className='director_position'>“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                    <div className='social_media_icons'>
                      <img src={twitter} className='twitter' alt='social'/>
                      <img src={linkedIn} className='linkedIn' alt='social'/>

                    </div>
                    <button  className='plus_button'> +</button>
                  </div>
              </div>
          </div>
        </div>
        <img src={bottomImg}  className='bottom_img_of_directors' alt=" bottom_icon" />
     </div> 
   )
 }
 
 export default Directors