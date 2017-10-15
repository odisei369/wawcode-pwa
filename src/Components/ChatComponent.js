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


    axios.get('http://localhost:8000/month-day/1/1', { crossdomain: true })
    //.then(response => response.json())
    //.then(data => console.log(data))
    // We set the latest prices in the state to the prices gotten from Cryptocurrency.
    // this.setState({ name: response.name });
    // this.setState({ content: response.content });
    // this.setState({ year: response.year });

    // Catch any error here
      .catch(error => {
        console.log(error)
      })
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
