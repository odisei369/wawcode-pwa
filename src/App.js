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
    const imageStyle = {
      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Hotel_Bristol_2011.JPG/240px-Hotel_Bristol_2011.JPG')",
    };

    return (
      <div className="app">
        <div className="page__background" style={imageStyle}>
        </div>
        <section className="page-content">
          <div className="container">
            <CardComponent/>
            <ChatComponent/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;