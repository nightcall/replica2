import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isLoggedIn,
      user
    } = this.props;

    return(
      <div id='body'>
        <NavBar {...this.props} />
        <Switch>
          <Route exact path='/'
            component={(props) => <HomePage timestamp={Date.now()} {...props} />}
            />
          <Route exact path='/u/:username'
            component={(props) => <ProfilePage timestamp={Date.now()} {...props} />}
            />
        </Switch>
      </div>
    );
  }
}