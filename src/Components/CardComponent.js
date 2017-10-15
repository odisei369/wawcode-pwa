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
      // Catch any error here
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-title">
              <h1>{this.state.events[0].name}</h1>
            </div>
            <div className="card-body">
              <h2>{this.state.events[0].content}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default CardComponent;
