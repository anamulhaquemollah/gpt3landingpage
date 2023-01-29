import React from 'react'; 
import { Article } from '../../components';

import "./blog.css"; 
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {

  let date = new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear(); 
  console.log(date); 

  const articleData = [
    {
      img: blog02, 
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      img: blog03, 
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      img: blog04, 
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
      img: blog05, 
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    }
  ]
  return (
    <div className='gpt__blog section__padding'>
      <div className="gpt__blog-heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt__blog-article-container">
        <div className="gpt__blog-article-container--large">
          <Article img = {blog01} date={date} title = "GPT-3 and Open  AI is the future. Let us exlore how it is?" btnText = "Read Full Article"/>
        </div>
        <div className="gpt__blog-article-container--small">
          {
            articleData.map((article, index)=>{
              return <Article img={article.img} date={date} title={article.title} btnText="Read Full Article"/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blog