import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import siteLogo from "../spy.svg"

class MyNavBar extends React.Component {

  render(){
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <img src={siteLogo} width="30" height="30" className="d-inline-block align-top" alt=""/>
              Codenames
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/settings">Settings</Link>
            <Link className="nav-link" to="/instructions">Instructions</Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      
    )
  }
}

export default MyNavBar;