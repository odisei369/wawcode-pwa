// Import React and Component
import React, {Component} from 'react';
// Import CSS from App.css
import './assets/stylesheets/style.css';
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
          <Nav pullRight className="custom-nav">
            <NavItem>Date</NavItem>
          </Nav>
        </Navbar>
        <section className="page-content">
          <CardComponent/>
          <ChatComponent/>
        </section>
      </div>
    );
  }
}

export default App;