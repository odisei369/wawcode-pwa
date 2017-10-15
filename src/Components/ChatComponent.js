import React, { Component } from 'react';
import axios from 'axios';

class ChatComponent extends Component {
  constructor () {
    super();
    this.state = {
      messages: [],
    };
  }
  componentWillMount () {


    fetch(`${process.env.API_SERVER}/messages`)
      .then(response => {})
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="email" className="form-control" id="name" placeholder="Jan Kowalski"/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="meassage" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  }
}


export default ChatComponent;
