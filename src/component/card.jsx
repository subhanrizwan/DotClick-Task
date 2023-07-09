
import React from 'react';
import './card.css'
import { Card } from 'antd';

const { Meta } = Card;

const Cards= () => (
  <Card
    hoverable
    style={{background:'#F5F4F4', width: 210,height:180 ,
    display:'flex',alignItems:'center',flexDirection:'column'}}
    cover={<img className='logo' style={{width:35}} alt="example" src="./src/assets/images/card-logo.png" />
   
}

>
<p className='holiday'>Holiday Inn</p>
    <div className='card_btm' >
        <div className='card_child1'>
            <h6>1.5 miles away from joblocation.</h6></div>

<div className="card_child2">
    <div className="grand_card_child1">
        <p>Singles: $120</p>
        <p>Doubles: $145</p>

    </div>
    <div className="grand_card_child2">
        <button>Book now</button>
    </div>
        {/* <button>Book now</button> */}
</div>

    </div>
  </Card>
);

export default Cards;