import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import Edit from '../components/Edit/Edit';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import New from '../components/New/New';
import SingleStuff from '../components/SingleStuff/SingleStuff';
import Stuff from '../components/Stuff/Stuff';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <BrowserRouter>
      <div className="App">
        <Navbar authed={authed} />
        <div className="container">
          <Switch>
            <PrivateRoute path="/home" component={Home} authed={authed} />
            <PrivateRoute path="/edit/:stuffId" component={Edit} authed={authed} />
            <PrivateRoute path="/stuff/new" component={New} authed={authed} />
            <PrivateRoute path="/stuff/:stuffId" component={SingleStuff} authed={authed} />
            <PrivateRoute path="/stuff" component={Stuff} authed={authed} />
            <PublicRoute path="/auth" component={Auth} authed={authed} />
            <Redirect from="*" to="/home"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
