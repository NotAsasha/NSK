import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "react-bootstrap/Navbar";
// eslint-disable-next-line
import { Badge, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Maps from './maps/maps'
// eslint-disable-next-line
import Explore from "./Pages/Explore/Explore"
import Tasks from "./Tasks"
import Accaunt from "./accaunt/accaunt"
import PreApp from "./PreApp";
import PershiKlasi from "./1-4/1-4"
import Pershi1Klasi from "./5-9/5-9"
import Pershi2Klasi from "./10-11/10-11"
// eslint-disable-next-line
import ErrorMenu from "./Other/error/error";
import Feedbacks from "./feedbacks/feedbacks"
import AboutUs from "./aboutus/aboutus"
import Courses from "./courses/courses"
// eslint-disable-next-line
import MainTitle from "./mainTitle/mainTitle";
// eslint-disable-next-line
import Math from "./math/math"
import Addition from "./math/addition"
import Subtraction from "./math/subtraction"
import Multiplication from "./math/multiplication"
// eslint-disable-next-line
import OneUndef from "./math/oneUndef"
import HardTask from "./math/hardTask"
import Good from "./math/good"
// eslint-disable-next-line
import Bad from "./math/bad"



function App() {
  return (
    <Router basename="/React">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to={"/NSK/"} className="nav-link">
              Школа
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/NSK/about"} className="nav-link">
                Про нас
              </Link>
              <Link to={"/NSK/feedbacks"} className="nav-link">
                Відгуки
              </Link>
              <Link to={"/NSK/map"} className="nav-link">
                Ми на карті
              </Link>
              <NavDropdown title="Класи" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/NSK/class/1-4"} className="nav-link">
                    1-4 класи
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/NSK/class/5-9">
                  <Link to={"/NSK/class/5-9"} className="nav-link">
                    5-9 класи
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/NSK/class/10-11">
                  <Link to={"/NSK/class/10-11"} className="nav-link">
                    10-11 класи
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/NSK/tasks">
                  Додаткові заняття
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to={"/NSK/tasks"} className="nav-link">
                Онлайн завдання
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/NSK/" component={PreApp} />
        <Route exact path="/NSK/help" component={Help} />
        <Route path="/NSK/about" component={AboutUs} />
        <Route path="/NSK/accaunt" component={Accaunt} />
        <Route path="/NSK/tasks" component={Tasks} />
        <Route path="/NSK/class/1-4" component={PershiKlasi} />
        <Route path="/NSK/class/5-9" component={Pershi1Klasi} />
        <Route path="/NSK/class/10-11" component={Pershi2Klasi} />
        <Route path="/NSK/feedbacks" component={Feedbacks} />
        <Route path="/NSK/courses" component={Courses} />
        <Route path="/NSK/addition" component={Addition} />
        <Route path="/NSK/subtraction" component={Subtraction} />
        <Route path="/NSK/multiplication" component={Multiplication} />
        <Route path="/NSK/oneundef" component={OneUndef} />
        <Route path="/NSK/hardtask" component={HardTask} />

        <Route path="/NSK/good" component={Good} />




        <Route path="/NSK/map" component={Maps} />
      </Switch>
    </Router>
  );
}
function Help() {
  return (
    <h1>

      Я вас підтримую!

    </h1>

  )


}

export default App;
