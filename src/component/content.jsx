import React from 'react'
import  './content.css';
import Head from './Head';
import Cards from './card';

const Content = () => {
  return (
    <dvi className="midsec_parent">
      <h2 className='top_heading'>You currently  have 3 requests</h2>
    <div className='midSec1'>
      <Head />
      <div className="below_head">
        <div className="below_head_child1">
          <small>RECEIVED</small>
        </div>
        <div className="below_head_child2">
          <small>NEGOTIATING</small>
        </div>
        <div className="below_head_child3">
          <small>COMPLETED</small>
        </div>
      </div>
    </div>
    <div className='midSec2'>
      <Head />
      <div className="below_head2">
        <p>Completed</p>
      </div>
      <div className="card_parent">
        <Cards />
        <Cards />
        <Cards />
      </div>
        </div>
        </dvi>
  )
}

export default Content;