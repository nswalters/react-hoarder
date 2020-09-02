import React from 'react';

import stuffData from '../../helpers/data/stuffData';

class New extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemImage: '',
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const newItemObj = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      itemImage: this.state.itemImage,
    }

    stuffData.createStuff(newItemObj)
      .then((res) => {
        this.props.history.push(`/stuff/${res.data.name}`);
      })
      .catch((err) => {console.error("Error creating new stuff: ", err)})
  }

  itemNameChangeHandler = (e) => {
    this.setState({itemName: e.target.value});
  }

  itemDescriptionChangeHandler = (e) => {
    this.setState({itemDescription: e.target.value});
  }

  itemImageChangeHandler = (e) => {
    this.setState({itemImage: e.target.value});
  }

  render() {
    return (
      <div className="New">
        <h1>New Stuff</h1>
        <form>
          <div className="form-group">
            <label htmlFor="formItemName">Name</label>
            <input type="text" className="form-control" id="formItemName"
                   placeholder="Name" value={this.state.itemName} onChange={this.itemNameChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="formStuffDescription">Description</label>
            <input type="text" className="form-control" id="formItemDescription"
                               placeholder="Description" value={this.state.itemDescription} onChange={this.itemDescriptionChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="formItemImage">Image URL</label>
            <input type="text" className="form-control" id="formItemImage"
                   placeholder="Image URL" value={this.state.itemImage} onChange={this.itemImageChangeHandler} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.formSubmitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default New;
