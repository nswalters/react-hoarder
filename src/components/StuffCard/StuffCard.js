import React from 'react';
import { Link } from 'react-router-dom';

class StuffCard extends React.Component {

  render() {
    const { item } = this.props;

    const detailsLink = `/stuff/${item.id}`

    return (
      <div className="card ml-2">
        <img className="card-img-top h-50 w-50" src={item.itemImage} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text text-truncate">{item.itemDescription}</p>
          <div className="d-flex justify-content-center">
            <Link to="/edit/12345" className="btn btn-primary mx-2">Edit</Link>
            <Link to={ detailsLink } className="btn btn-secondary mx-2">Details</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StuffCard;
