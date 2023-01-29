import React from 'react'; 
import { Feature } from '../../components';

import "./whatgpt3.css"; 

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt section__padding'>
      <div className='whatgpt__features'>
        <div className='whatgpt__feature--first'>
          <div className='whatgpt__feature--first-headline'>
           <Feature title="What is GPT-3" text=""/>
          </div>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className='whatgpt__feature whatgpt__feature-double-headline'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <h5 className='gradient__text'>Explore The Library</h5>
        </div>
        <div className='whatgpt__feature whatgpt__child-features'>
          <div>
          <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
          </div>
          <div>
          <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
          </div>
          <div>
          <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3