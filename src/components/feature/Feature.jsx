import React from 'react'; 

import "./feature.css"; 

const Feature = ({title, text}) => {
  return (
    <>
      <div className="headline">
      <div className='feature__headline-bar'/>
      <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </>
  )
}

export default Feature