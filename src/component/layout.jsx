import React from 'react'
import './layout.css'
import Content from './content'

const Layout = () => {
  return (
    <div className='parent'>
       <div className="child1">
      <div className="topbar">
        <div className="title">
          <h2>LODGN</h2>
        </div>
        <div className="title_childs">
          <h4>Current requests</h4>
        </div>
        <div className="title_childs">
        <h4>  Ongoing stays </h4>
        </div>
        <div className="title_childs">
          <h4>Previous stays</h4>
        </div>
        <div className="title_childs">
          <h4 >Reports</h4>
        </div>
      </div>
      <div className="btmbar">
       <div className='btn_parent'>
        <button className='log_btn'>Log-out</button>
        </div>
        <div className="help">
         <p>Help-Desk</p>
         <p className='num'>786-874-998</p>
        </div>
      
      </div>
       </div>
    <div className="child2">
<Content />
    </div>
    </div>
  )
}

export default Layout