import React, {Component} from 'react';
import axios from 'axios';

class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: 'example title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl augue, sodales et sem ac, faucibus bibendum turpis. Aliquam maximus tellus in sollicitudin tempor. Suspendisse potenti. Mauris condimentum faucibus est at mollis. Duis eleifend aliquet accumsan. Sed efficitur eget nisl eget dapibus. Vivamus fringilla lorem sed ex pretium feugiat.',
    };
  }

  componentWillMount() {
    axios.get('url')
      .then(response => {
        // We set the latest prices in the state to the prices gotten from Cryptocurrency.
        this.setState({title: response.title});
        this.setState({description: response.description});
      })
      // Catch any error here
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-title">
              <h2>{this.state.title}</h2>
            </div>
            <div className="card__body">
              <article>
                <p>{this.state.description}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default CardComponent;
