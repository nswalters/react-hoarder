import React from 'react';

import StuffCard from '../StuffCard/StuffCard';

import stuffData from '../../helpers/data/stuffData';

class Stuff extends React.Component {
  state = {
    stuff: [],
  }

  componentDidMount() {
    stuffData.getAllStuff()
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => {console.error('Error getting all stuff: ', err)});
  }

  render() {
    const { stuff } = this.state;

    const stuffCards = stuff.map((item) => <StuffCard key={item.id} item={item} />);

    return (
      <div>
        <h1>My Stuff</h1>
        <div className="StuffCard">
          <div className="card-columns">
            { stuffCards }
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
