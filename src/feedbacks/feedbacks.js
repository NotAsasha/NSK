import React from "react";
import Explore from "../Pages/Explore/Explore";
import "./feedbacks.css"
import Card from 'react-bootstrap/Card'
// eslint-disable-next-line
import Button from 'react-bootstrap/Button'
import feetBack1 from '../img/feetback1.jpg'
import feetBack2 from '../img/feetback2.jpg'
import feetBack3 from '../img/feetback3.jpg'

function Feedbacks() {
  return (
    <div className="feedbacks">
<Card classname='Card' style={{border: 'yellowgreen 5px solid'}}>
  <Card.Img variant="top" src={feetBack1} />
</Card>
<Card style={{border: 'yellowgreen 5px solid' }}>
  <Card.Img variant="top" src={feetBack2} />
</Card>
<Card style={{border: 'yellowgreen 5px solid' }}>
  <Card.Img variant="top" src={feetBack3} />
</Card>

      <Explore />
    </div>
  );
}

export default Feedbacks;
