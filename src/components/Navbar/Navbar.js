import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    if (authed) {
      return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">React Hoarder</span>
            <Link to="/" className="btn btn-primary ml-auto mr-4">Home</Link>
            <Link to="/stuff" className="btn btn-primary mr-4">My Stuff</Link>
            <Link to="/stuff/new" className="btn btn-primary mr-4">New</Link>
            <Link to="#" className="btn btn-danger" onClick={this.logMeOut}>Logout</Link>
          </nav>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">ReactHoarder</span>
        </nav>
      </div>
    )
  }
}

export default Navbar;
