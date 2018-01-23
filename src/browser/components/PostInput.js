import React from 'react';

export default class PostInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    const { text } = this.state;

    return(
      <div id='post-input'>
        <form>
          <textarea placeholder='How are you doing today ?'
            value={text} onChange={this.handleChange} />
          <button onClick={this.handleClick} >Submit</button>
        </form>
      </div>
    );
  }
}