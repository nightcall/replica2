import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isLoggedIn,
      user
    } = this.props;

    const navLeft = (
      <React.Fragment>
        <h3><Link to='/'>Replica</Link></h3>
        {isLoggedIn ? <input type='text' placeholder='Search...' /> : null}
      </React.Fragment>
    );

    const navRight = !isLoggedIn ? null : (
      <Link to={`/u/${user.username}`}>{user.name}</Link>
    );

    return(
      <nav>
        <div id='nav-left'>
          {navLeft}
        </div>
        <div id='nav-right'>
          {navRight}
        </div>
      </nav>
    );
  }
}