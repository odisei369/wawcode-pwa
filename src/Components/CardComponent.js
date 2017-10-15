import React, {Component} from 'react';
import axios from 'axios';
import {Button, Panel} from "react-bootstrap";

class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      description: '',
      title: '',
      open: false,
      imgSrc: '../assets/img/hotel.JPG',
    };
  }

  componentWillMount() {
    fetch('http://159.89.15.164:8000/today')
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
    if (this.state.events.length) {
      return <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card__title">
                <h1>{this.state.events[0].name}</h1>
              </div>
              <div className="card__body">
                <article>
                  <p>{this.state.events[0].content}</p>
                  <Panel collapsible expanded={this.state.open}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </Panel>
                  <Button onClick={() => this.setState({open: !this.state.open})}>
                    Czytaj więcej
                  </Button>
                </article>
              </div>
              <div className="card__image">
                <img
                  src="https://upload.waikimedia.org/wikipedia/commons/thumb/3/3c/Hotel_Bristol_2011.JPG/240px-Hotel_Bristol_2011.JPG"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card__title">
              </div>
              <div className="card__body">
                <article>
                  <p>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  }
}


export default CardComponent;
