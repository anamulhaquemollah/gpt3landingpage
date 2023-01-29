import React from 'react'; 

import "./cta.css"; 

const Cta = () => {
  return (
    <div className='gpt__cta section__padding'>
      <div className="gpt__cta-container">
        <div className="gpt__cta-info">
          <p>Request Early Access to Get Started</p>
          <h1>Register today & start exploring the endless possiblities.</h1>
        </div>
        <div className="gpt__cta-button">
          <button className='cta__button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cta