import React, { Component } from 'react';
import axios from 'axios';

class CardComponent extends Component {
  constructor () {
    super();
    this.state = {
      title: 'example title',
      description: 'example discription',
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
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-title">
              <h1>{this.state.title}</h1>
            </div>
            <div className="card-body">
              <h2>{this.state.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default CardComponent;
