import React from 'react';
import PostList from './PostList';
import PostInput from './PostInput';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  loadPosts = () => {
    fetch('/postlist', {
      method: 'GET',
      credentials: 'same-origin',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(posts => this.setState({posts}));
  }

  componentDidMount = () => {
    this.loadPosts();
  }

  render() {
    const {
      timestamp
    } = this.props;

    return(
      <div id='home-page'>
        <h3>Home: {timestamp}</h3>
        <PostInput />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}