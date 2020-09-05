import React from 'react';

import stuffData from '../../helpers/data/stuffData';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemImage: '',
    uid: '',
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const newItemObj = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      itemImage: this.state.itemImage,
      uid: this.state.uid,
    }

    stuffData.updateStuffById(this.props.match.params.stuffId, newItemObj)
      .then(() => {
        this.props.history.push(`/stuff/${this.props.match.params.stuffId}`);
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

  getStuff = () => {
    stuffData.getStuffById(this.props.match.params.stuffId)
      .then((response) => {
        console.error(response);
        const {itemName, itemDescription, itemImage, uid} = response.data;
        this.setState({itemName, itemDescription, itemImage, uid});
      })
      .catch((err) => {console.error('Could not get stuff by id in edit: ', err)});
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    return (
      <div className="New">
        <h1>Edit Stuff</h1>
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

export default Edit;
