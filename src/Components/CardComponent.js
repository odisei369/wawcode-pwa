import React, { Component } from 'react';
import axios from 'axios';

class CardComponent extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  componentWillMount () {
    axios.get('url')
      .then(response => {
        // We set the latest prices in the state to the prices gotten from Cryptocurrency.
        this.setState({ title: response.title });
        this.setState({ description: response.description });
      })
      // Catch any error here
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return <div className="container">
      <h1>{this.state.title}</h1>
      <h2>{this.state.description}</h2>
    </div>
  }
}


export default CardComponent;
