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
            <p className="text-muted">{this.props.user}</p>
            <span>{this.props.message}<br/>
            <span>{this.props.date}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  }
}


export default MessageComponent;