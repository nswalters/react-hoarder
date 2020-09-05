import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import StuffCard from '../StuffCard/StuffCard';

import stuffData from '../../helpers/data/stuffData';

class Stuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    stuffData.getAllStuff(firebase.auth().currentUser.uid)
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => {console.error('Error getting all stuff: ', err)});
  }

  deleteItem = (itemId) => {
    stuffData.deleteStuffById(itemId)
      .then(() => this.getStuff())
      .catch((err) => console.error("Delete item failed: ", err));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    const { stuff } = this.state;

    const stuffCards = stuff.map((item) => <StuffCard key={item.id} item={item} deleteItem={this.deleteItem} />);

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
