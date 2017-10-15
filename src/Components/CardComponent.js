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
      currentEventIndex: 0,
    };
    this.nextEvent = this.nextEvent.bind(this);
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
              year: event.year
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

  nextEvent() {
    let nextIndex = this.state.currentEventIndex + 1;
    if(nextIndex >= this.state.events.length) {
      nextIndex = 0;
    }
    this.setState({currentEventIndex: nextIndex})
  }

  render() {
    console.log(this.state.events);
    if (this.state.events.length) {
      return <div>
        <div className="row">
          <h1 className="page-content__date">
            <span>Dzisiejszego dnia w roku: </span>
            <span>{this.state.events[0].year}</span>
          </h1>
          <div className="col-md-12">
            <div className="card">
              <div className="card__title">
                <h1>{this.state.events[this.state.currentEventIndex].name}</h1>
              </div>
              <div className="card__body">
                <article>
                  <p>{this.state.events[0].content}</p>
                  <p>{this.state.events[this.state.currentEventIndex].content}</p>
                  <Button onClick={this.nextEvent}>
                    Kolejne wydarzenie
                  </Button>
                </article>
              </div>
              <div className="card__image">
                <img
                  src={this.state.events[0]}/>
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
