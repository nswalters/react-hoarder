import React from 'react';

import stuffData from '../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    stuffData.getStuffById(this.props.match.params.stuffId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => {console.error("Could not get single stuff: ", err)});
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        <h1>Single Stuff</h1>
        <div className="StuffCard">
          <div className="card ml-2">
            <img className="card-img-top w-25 mx-auto" src={item.itemImage} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff ;
