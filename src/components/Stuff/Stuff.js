import React from 'react';
import { Link } from 'react-router-dom';

class Stuff extends React.Component {
  render() {
    return (
      <div>
        <h1>My Stuff</h1>
        <Link to="/edit/12345" className="btn btn-primary mr-5">Edit</Link>
        <Link to="/stuff/12345" className="btn btn-secondary mr-5">Single</Link>
      </div>
    );
  }
}

export default Stuff;
