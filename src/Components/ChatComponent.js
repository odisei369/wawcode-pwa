import React, {Component} from 'react';
import axios from 'axios';

class ChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentWillMount() {


    fetch(`${process.env.API_SERVER}/messages`)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
    this.webSocket();
  }

  webSocket = () => {
    const conn = new WebSocket('ws://localhost:8080');

    conn.onopen = function(e) {
      console.info("Connection established succesfully");
    };

    conn.onmessage = function (e) {
      var data = JSON.parse(e.data);
      Chat.appendMessage(data.username, data.message, data.date);
    };

    conn.onerror = function (e) {
      alert("Error: something went wrong with the socket.");
      console.error(e);
    };
  }


  render() {
    return <div className="container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="email" class="form-control" id="name" placeholder="Jan Kowalski"/>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="meassage" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  }
}


export default ChatComponent;
