import React, {Component} from 'react';
import axios from 'axios';

class ChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  sendMessage(text) {
    clientInformation.message = text;
    clientInformation.date = new Date().toLocaleString();
    conn.send(JSON.stringify(clientInformation));
  }

  componentWillMount() {


    fetch(`${process.env.API_SERVER}/messages`)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        });
    this.webSocket();
  }

  webSocket = () => {
    const conn = new WebSocket('ws://localhost:8080');

    conn.onopen = function(e) {
      console.log("Connection established succesfully");
    };

    conn.onmessage = function (e) {
      var data = JSON.parse(e.data);
      this.state.messages.push({user: data.username, message: data.message, date: data.date});
    };

    conn.onerror = function (e) {
      alert("Error: something went wrong with the socket.");
      console.error(e);
    };
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
