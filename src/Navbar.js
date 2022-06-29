import React  from 'react'
import './Nav.css'
import { useState,useEffect } from 'react'


function Navbar() {
    const[show,handleShow]=useState(false)
    useEffect(() => {
     window.addEventListener("scroll",()=>{
         if(window.scrollY>100){
             handleShow(true)
         }else handleShow(false)
     });
    //  return () =>{
    //      window.removeEventListener("scroll")
    //  }
    }, [])
    
  return (
   <header>
        <div className={`Nav ${show && "Nav_black"}`}>
          <img
          className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt='NetflixLOgo'
          />
          
          <button className='Nav_button'>Sign In</button>
          </div>
          
   </header>
    
  )
}

export default Navbar