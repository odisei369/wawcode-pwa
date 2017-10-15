// Import React and Component
import React, {Component} from 'react';
// Import CSS from App.css
import './assets/stylesheets/style.css';
// Import the History component to be used below
import CardComponent from './Components/CardComponent'
import ChatComponent from "./Components/ChatComponent";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  componentWillMount() {
    fetch('http://159.89.15.164:8000/today')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach((event) => {
          this.state.events.push(
            {
              name: event.name,
              content: event.content,
              day: event.day,
              month: event.month,
              year: event.year,
              imgSrc : event.image_url,
            }
          )
        });
        this.setState({events: this.state.events});
      })
      // Catch any error here
      .catch(error => {
        console.log(error)
      })
  }

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
            <CardComponent events={this.state.events} />
            <ChatComponent/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;