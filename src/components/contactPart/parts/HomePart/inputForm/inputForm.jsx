 import React, { useState } from 'react'
 import './input.css'
import { useDispatch, useSelector } from 'react-redux'
import { userInfo } from '../../../../../features/headerToggler/Auth'
 
 function InputFrom() {
let [name,setName]=useState()
let [email,setEmail]=useState()
let [Cname,setCname]=useState()
let [title,setTitle]=useState()
let [message,setMessage]=useState()

 const dispatch =useDispatch()
// const userDetails=useSelector((state)=>state.user.header.Cname)
//  
   return (
    <div> <form action='https://eco.htmlacademy.ru' autoComplete='on'>
        <input onChange={(e)=>setName(e.target.value)} required type='text' placeholder='Name' />
        <input onChange={(e)=>setEmail(e.target.value)} required type='email'  placeholder='E_mail address'/>
        <input onChange={(e)=>setCname(e.target.value)} required type='text'  placeholder='Company name'/>
        <input onChange={(e)=>setTitle(e.target.value)} required type='text' placeholder='Title'/>
        <textarea onChange={(e)=>setMessage(e.target.value)}  placeholder='Message'  />
        <button type="submit" onClick={()=>dispatch(userInfo({name,email,Cname,title,message}))}   id='SBOF'>Submit</button>
     </form></div>
    
   )
 }
 
 export default InputFrom