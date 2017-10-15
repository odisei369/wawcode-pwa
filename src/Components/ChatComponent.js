import React, {Component} from 'react';

import MessageComponent from './MessageComponent';

class ChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{user: 'Karol', message: 'fwafwaf', date: '20.10.2009'}],
      message: '',
      name: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(text, user) {
    clientInformation.message = text;
    clientInformation.date = new Date().toLocaleString();
    clientInformation.user= user;
    this.conn.send(JSON.stringify(clientInformation));
  }

  componentDidMount() {

      console.log("aa" + this.props.id);
    this.conn = new WebSocket(`ws://159.89.15.164:8080`);
    this.conn.component = this;
    this.conn.onopen = function (e) {
      console.log("Connection established succesfully");
    };

    this.conn.onmessage = function (e) {
      var data = JSON.parse(e.data);
      this.component.setState({
        messages: this.component.state.messages.concat([{
          user: data.user,
          message: data.message,
          date: data.date
        }])
      });
      console.log(this.component.state.messages);
    };

    this.conn.onerror = function (e) {
      console.warn("Error: something went wrong with the socket.");
      console.error(e);
    };

    fetch(`${process.env.API_SERVER}/messages`)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        });
  }
  handleSubmit(event){
    this.sendMessage(this.state.message, this.state.name);
    this.setState({name: ''});
    this.setState({message: ''});
    return false;
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }


  render() {
    console.log(this.props.id);
    const listMessages = this.state.messages.map((post) =>
      <MessageComponent message={post.message} user={post.user} date={post.date} />);

    return <div>
      <div>
        {listMessages}
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" placeholder="Jan Kowalski" onChange={this.handleChangeName}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Wiadomość</label>
          <textarea className="form-control" id="meassage" rows="3" onChange={this.handleChangeMessage}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Wyślij</button>
      </form>
    </div>
  }
}


export default ChatComponent;
