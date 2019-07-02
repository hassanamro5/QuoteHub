import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { store } from '../index';
import { Provider } from 'react-redux';




export class BadgeButton extends Component {

  saySomething(something) {
    console.log(something);
}

handleClick(e) {
    this.saySomething("element clicked");
}

componentDidMount() {
    this.saySomething("component did mount");
}
  render() {
    return (
      <div>
        <br />

<Button variant="primary" onClick={this.handleClick.bind(this)}>
  Recent Enquries   
  <Badge variant="light">
    
    9
    {/* Insert Redux count code here. */}

  </Badge>
  <span className="sr-only">es</span>
</Button>
        
      </div>
    )
  }
}

export default BadgeButton
