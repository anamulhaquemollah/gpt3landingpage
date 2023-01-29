import React from 'react'; 

import "./article.css"; 

const Article = (props) => {
  const {img, title, date, btnText} = props; 
  return (
    <div className='gpt__article'>
      <div className="gpt__article-image">
        <img src={img} alt="blog article" />
      </div>
      <div className="gpt__article-details">
        <div className="article__headline">  
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p className="btnText">{btnText}</p>
      </div>
    </div>
  )
}

export default Article; 