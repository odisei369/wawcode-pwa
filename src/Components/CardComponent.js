import React, { Component } from 'react';
import axios from 'axios';

class CardComponent extends Component {
  constructor () {
    super();
    this.state = {
      events: [],
    };
  }

  componentWillMount () {
    fetch('http://localhost:8001/today')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach((event) => {
          this.state.events.push(
            {name: event.name, content: event.content}
          )
        });
          this.setState({events: this.state.events});
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    if(!this.state.events.length) {
      return <div></div>
    } else {
      console.log(this.state.events[0]);
      return <div className="container">
        <h1>{this.state.events[0].name}</h1>
        <h2>{this.state.events[0].content}</h2>
      </div>
    }
  }
}


export default CardComponent;
