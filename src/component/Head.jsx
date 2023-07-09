import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className='head_parent'>
      <div className="header">
        <div className="header_child1">
          <div className="head_grand_child1">
            <strong className='heading'>St Judes Hospital </strong>
            </div>       
            <div className="head_grand_child2">
              <small style={{fontSize:'10px'}}>Sarasota,FL. 33178</small>
            </div>   
        </div>
        <div className="header_child2">
        <div  className="head_grand_child1">
          <strong style={{marginLeft:'40px'}}>17 - 10</strong>
            </div>       
            <div className="head_grand_child2">
              <small style={{marginLeft:'20px',fontSize:'10px'}}>October - December</small>
            </div>   
        </div>
        <div className="header_child3">
        <div className="head_grand_child1">
          <strong style={{marginLeft:'40px'}}>20 Rooms</strong>
            </div>       
            <div className="head_grand_child2">
            <sup style={{marginLeft:'15px',fontSize:'10px'}}>10 Singles, 10 doubles</sup>

            </div>   
        </div>
      </div>
    </div>
  )
}

export default Head;





{/* <h4>St Judes Hospital   </h4>
          <p>Sarasota,FL. 33178</p> */}