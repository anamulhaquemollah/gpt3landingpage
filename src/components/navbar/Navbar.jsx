import React, { useState } from 'react'; 
import { MdClose, MdMenu } from "react-icons/md";


import logo from "../../assets/logo.svg"; 
import "./navbar.css"; 

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false); 
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>

        <div className='gpt3__navbar-link_logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='gpt3__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt">What is GPT-3</a></p>
          <p><a href="#Possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>

      </div>
        <div className='gpt3__navbar-sign'>
          <p><a href="#signIn">Sign In</a></p>
          <button className='gpt3__navbar-signup'>Sign Up</button>
        </div>
        
        <div className='gpt3__navbar-menu'>
          {showMenu ? <MdClose color='white' size={30} onClick={()=>setShowMenu(false)} /> 
            : <MdMenu color='#fff' size={30} onClick={()=>setShowMenu(true)} />}
          {showMenu && (
            <div className='gpt3__navbar-menu-container scale-up-center'>
              <div className='gpt3__navbar-menu-container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt">What is GPT-3</a></p>
                <p><a href="#Possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
              </div>
              <div className='gpt3__navbar-menu-sign'>
                <p><a href="#signIn">Sign In</a></p>
                <button className='gpt3__navbar-signup'>Sign Up</button>
              </div>

            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar