import React, {Component} from 'react';

class MessageComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      <div className="row chat">
        <div className="col-md-12">
          <div className="chat__item">
            <p class="text-muted">{this.props.user} - {this.props.date}</p>
            <span>{this.props.message}</span>
          </div>
        </div>
      </div>
    </div>
  }
}


export default MessageComponent;