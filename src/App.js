// Import React and Component
import React, {Component} from 'react';
// Import CSS from App.css
import './App.css';
// Import the History component to be used below
import CardComponent from './Components/CardComponent'
import ChatComponent from "./Components/ChatComponent";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">History</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>Date</NavItem>
          </Nav>
        </Navbar>
        <CardComponent/>
      </div>
    );
  }
}

export default App;