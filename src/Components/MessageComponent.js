import React, {Component} from 'react';

class MessageComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return <div className="container">
      <div className="row">
        <p class="text-muted">{this.props.user} - {this.props.date}</p>
        <span>{this.props.message}</span>
      </div>
    </div>
  }
}


export default MessageComponent;