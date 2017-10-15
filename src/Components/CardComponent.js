import React, {Component} from 'react';
import axios from 'axios';
import {Button, Panel} from "react-bootstrap";

class CardComponent extends Component {
constructor(){
  super();
  this.state = {currentEventIndex: 0};
  this.nextEvent = this.nextEvent.bind(this);
}
  nextEvent() {
    let nextIndex = this.state.currentEventIndex + 1;
    if(nextIndex >= this.props.events.length) {
      nextIndex = 0;
    }
    // this.props.func(nextIndex);
    this.setState({currentEventIndex: nextIndex})
  }


  render() {
    console.log(this.props.events);
    if (this.props.events.length) {
      return <div>
        <div className="row">
          <h1 className="page-content__date">
            <span>Dzisiejszego dnia w roku: </span>
            <span>{this.props.events[this.state.currentEventIndex].year}</span>
          </h1>
          <div className="col-md-12">
            <div className="card">
              <div className="card__title">
                <h1>{this.props.events[this.state.currentEventIndex].name}</h1>
              </div>
              <div className="card__body">
                <article>
                  <p>{this.props.events[this.state.currentEventIndex].content}</p>
                </article>
              </div>
              <div className="card__image">
                <img
                  src={this.props.events[this.state.currentEventIndex].imgSrc}/>
              </div>
              <div className="card__action-bar">
                <Button onClick={this.nextEvent} className="btn btn-primary">
                  Kolejne wydarzenie
                </Button>
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
