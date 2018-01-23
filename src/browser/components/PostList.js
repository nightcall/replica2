import React from 'react';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;
    return(
      <div id='post-list'>
        {posts.map(p => <h4 key={p.id}>{p.id}: {p.text}</h4>)}
      </div>
    );
  }
}