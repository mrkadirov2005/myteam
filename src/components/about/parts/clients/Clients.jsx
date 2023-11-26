import React from 'react'
import './Clients.css'
import Ccircle from './img/clients-circle (1).svg'
import verge from './img/myteam-multi-page-website/the-verge.svg'
import jakarta from './img/myteam-multi-page-website/the-jakarta-post.svg'
import guardian from './img/myteam-multi-page-website/the-guardian.svg'
import techradar from './img/myteam-multi-page-website/techradar.svg'
import gadgets from './img/myteam-multi-page-website/gadgets-now.svg'

const clientslist=[verge,jakarta,guardian,techradar,gadgets]

function Clients() {
  return (
    <section className='clients_container'>
        <div className='clients_wrapper'> 
            <img src={Ccircle} className='clients_circle' alt='clients_circle'/>
            <h1 className='clients_title'>Some of our clients</h1>
            <div className='icons_wrapper'>
                {clientslist.map(l=>{
                    return <img className='clients' alt={l} src={l}/>
                })}
            </div>
        </div>

    </section>
  )
}

export default Clients