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

        /*
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        
        <Link className="nav-link navbar-brand" to="/">
          <img src={siteLogo} width="30" height="30" class="d-inline-block align-top" alt=""/>
          Codenames
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item"><Link className="nav-link" to="/settings">Settings</Link></li>
            <li class="nav-item"><Link className="nav-link" to="/instructions">Instructions</Link></li>
          </ul>
        </div>
        




      </nav>
        
        
        
        
        
        
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="#collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="#collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>*/