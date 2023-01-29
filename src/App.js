import React from 'react'; 

import "./App.css"; 
import {Article, Brand, Cta, Feature, Navbar} from "./components"; 
import {Features, Header, Footer, Blog, Possibility, WhatGPT3} from "./containers"; 



const App = () => {
  return (
    <div className='app'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <div className='brand__bg'>
            <Brand />
        </div>
       
        <div className='gradient__bg-dark'>
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
        </div>
        
        <Footer />
    </div>
  )
}

export default App