import React from 'react'
import Card from 'react-bootstrap/Card'
// eslint-disable-next-line
import Button from 'react-bootstrap/Button'
// eslint-disable-next-line
import Kryg from "../Other/kryg/kryg";
import Tor from "../img/tor.jpg"
import Hulk from "../img/hulk.jpg"
import ToniStark from "../img/toni stark.jpg"
import './aboutus.css'
// eslint-disable-next-line
import Navbar from "react-bootstrap/Navbar";
import "react-bootstrap/Navbar";
// eslint-disable-next-line
import { Container, Nav, NavDropdown } from "react-bootstrap";

function AboutUs() { 
return(
    <div>
        <div className="ttt">
      <h1 className="subtitless"><span>Математична школа НСК</span> <br />-  це новітня школа, яка <br />спеціалізується   на вивчені математичних наук
    </h1>
<h1  className="subtitlesss">
    Наша команда:
</h1>
  </div>
    <div className="Techers">
        
    <Card>
  <Card.Img className="photo1" variant="top" src={Tor} />
  <Card.Body>
    <Card.Title>Тор</Card.Title>
    <Card.Text>
    Вчитель комп`ютерних наук
    </Card.Text>
    <NavDropdown title="Докладніше" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
Найкращий з можливих вчитель<br /> інформатики.Стаж: 6 тисяч років, <br />він такий професійний програміст,<br /> що вміє запрограмовувати навіть близкавки!
                  </NavDropdown.Item>
                </NavDropdown>
  </Card.Body>
</Card>
    <Card>
    <Card.Img className="photo1" variant="top" src={Hulk} />
    <Card.Body>
      <Card.Title>Халк</Card.Title>
      <Card.Text>
Вчитель фізкультури
      </Card.Text>
      <NavDropdown title="Докладніше" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
Найкращий з можливих вчитель<br /> фузкультури 
 і найсильніша істота на <br />землі. Може навчити учнів усього,  <br /> що вміє сам

 і брав учась у вврятуванні світу(3 рази)
                  </NavDropdown.Item>
                </NavDropdown>
    </Card.Body>
  </Card>
      <Card>
      <Card.Img className="photo1" variant="top" src={ToniStark} />
      <Card.Body>
        <Card.Title>Тоні Старк</Card.Title>
        <Card.Text>
        Вчитель математики і фізики
        </Card.Text>
        <NavDropdown title="Докладніше" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
Найкращий з можливих вчитель<br /> математики 
 і фізики. Винайшов найкращий <br /> в світі екзо-костюм 
 
 і врятував світ(3 раза)
                  </NavDropdown.Item>
                </NavDropdown>
      </Card.Body>
    </Card>
  </div>
  </div>
);
};


export default AboutUs