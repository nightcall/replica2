import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1>Profile[{this.props.match.params.username}]: {this.props.timestamp}</h1>
    );
  }
}