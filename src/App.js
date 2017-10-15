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
        <section className="page-content">
          <div className="container">
            <h1>20.09.1933</h1>
            <CardComponent/>
            <ChatComponent/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;