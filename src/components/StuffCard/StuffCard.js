import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class StuffCard extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, deleteItem } = this.props;

    const detailsLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="card ml-2">
        <img className="card-img-top h-50 w-50" src={item.itemImage} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text text-truncate">{item.itemDescription}</p>
          <div className="d-flex justify-content-center">
            <Link to={ editLink } className="btn btn-primary mx-2">Edit</Link>
            <Link to={ detailsLink } className="btn btn-secondary mx-2">Details</Link>
          </div>
            <button onClick={() => {deleteItem(item.id)}} className="btn btn-danger mx-2 mt-2">Delete</button>
        </div>
      </div>
    );
  }
}

export default StuffCard;
