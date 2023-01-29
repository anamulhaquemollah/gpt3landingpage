import React from 'react'; 

import "./possibility.css"; 
import possibility from "../../assets/possibility.png"; 

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className="gpt__possibility-container">
        <div className="gpt__possibility-image">
          <img src={possibility} alt="" />
        </div>
        <div className="gpt__possibility-details">
          <p>Request Early Access to Get Started</p>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='early-request-para'>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Possibility